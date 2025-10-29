import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import SectionTitle from './SectionTitle';

const loadingMessages = [
  "Préparation des ingrédients numériques...",
  "Le chef ajuste l'assaisonnement de votre vidéo...",
  "Mise en place de votre chef-d'œuvre visuel...",
  "Ajout d'une pincée de magie cinématographique...",
  "Votre souvenir est presque prêt à être servi !",
];

// Helper function to convert a File/Blob to a base64 string
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URI prefix
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

const VideoGenerator: React.FC = () => {
  const [apiKeySelected, setApiKeySelected] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const loadingIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const checkApiKey = async () => {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      setApiKeySelected(hasKey);
    };
    checkApiKey();
  }, []);

  useEffect(() => {
    if (isLoading) {
      loadingIntervalRef.current = window.setInterval(() => {
        setLoadingMessage(prev => {
          const currentIndex = loadingMessages.indexOf(prev);
          const nextIndex = (currentIndex + 1) % loadingMessages.length;
          return loadingMessages[nextIndex];
        });
      }, 3000);
    } else {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    }
    return () => {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    };
  }, [isLoading]);

  const handleSelectKey = async () => {
    await window.aistudio.openSelectKey();
    setApiKeySelected(true); // Assume success to avoid race condition
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setVideoUrl(null);
      setError(null);
    }
  };
  
  const handleGenerateVideo = async () => {
    if (!imageFile) {
      setError("Veuillez d'abord sélectionner une image.");
      return;
    }
    
    setIsLoading(true);
    setVideoUrl(null);
    setError(null);
    setLoadingMessage(loadingMessages[0]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const imageBase64 = await fileToBase64(imageFile);

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Une vidéo cinématique de cette image.',
        image: {
          imageBytes: imageBase64,
          mimeType: imageFile.type,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio,
        }
      });
      
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const videoBlob = await videoResponse.blob();
        setVideoUrl(URL.createObjectURL(videoBlob));
      } else {
        throw new Error("La génération de la vidéo a échoué. Aucun lien de téléchargement trouvé.");
      }

    } catch (err: any) {
      console.error('Video Generation Error:', err);
      
      // Convert the error to a string to reliably check for substrings.
      const errorString = JSON.stringify(err);

      // The specific "NOT_FOUND" error often indicates an API key issue with the Veo model.
      if (errorString.includes("Requested entity was not found") || errorString.includes("NOT_FOUND")) {
         setError("Votre clé API n'est pas valide ou n'a pas accès au modèle Veo. Veuillez sélectionner une nouvelle clé et réessayer.");
         setApiKeySelected(false);
      } else {
        // For other errors, display a more generic message.
        // We try to find a 'message' property, otherwise we show the stringified error.
        const displayError = err.message || errorString;
        setError(`Une erreur est survenue: ${displayError}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!apiKeySelected) {
    return (
        <section id="video" className="py-12 sm:py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <SectionTitle title="Créez Votre Souvenir Vidéo" subtitle="Transformez vos photos en magie" />
             <div className="mt-8 bg-white p-8 max-w-lg mx-auto rounded-lg shadow-md">
                 <p className="mb-4 text-slate-600">Pour utiliser cette fonctionnalité, veuillez sélectionner une clé API Google AI.</p>
                 <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mb-4 block">En savoir plus sur la facturation.</a>
                 <button onClick={handleSelectKey} className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-transform duration-300 transform hover:scale-105 shadow-lg">
                    Sélectionner une Clé API
                 </button>
             </div>
          </div>
        </section>
    );
  }

  return (
    <section id="video" className="py-12 sm:py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Créez Votre Souvenir Vidéo" subtitle="Transformez vos photos en magie" />
        <div className="mt-12 max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
             <div 
               className="aspect-video w-full bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 cursor-pointer hover:border-primary transition-colors"
               onClick={() => fileInputRef.current?.click()}
             >
                {previewUrl ? (
                    <img src={previewUrl} alt="Aperçu" className="w-full h-full object-cover rounded-md"/>
                ) : (
                    <div className="text-center text-slate-500 p-4">
                        <svg className="w-12 h-12 mx-auto mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p>Cliquez pour choisir une photo</p>
                    </div>
                )}
             </div>
             <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

             <div className="space-y-4">
                 <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Décrivez l'ambiance (ex: une vapeur appétissante s'échappe du plat)"
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                    rows={3}
                 />
                 <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setAspectRatio('16:9')} className={`py-2 rounded-md transition ${aspectRatio === '16:9' ? 'bg-primary text-white' : 'bg-slate-200 hover:bg-slate-300'}`}>
                        16:9 Paysage
                    </button>
                     <button onClick={() => setAspectRatio('9:16')} className={`py-2 rounded-md transition ${aspectRatio === '9:16' ? 'bg-primary text-white' : 'bg-slate-200 hover:bg-slate-300'}`}>
                        9:16 Portrait
                    </button>
                 </div>
             </div>
          </div>

          <div className="mt-6 text-center">
             <button 
                onClick={handleGenerateVideo}
                disabled={!imageFile || isLoading}
                className="bg-secondary text-white font-bold py-3 px-10 rounded-full hover:bg-amber-600 transition-transform duration-300 transform hover:scale-105 shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed disabled:scale-100"
             >
                {isLoading ? 'Génération en cours...' : 'Générer la Vidéo'}
             </button>
          </div>

          {isLoading && (
            <div className="mt-6 text-center">
                <div className="flex justify-center items-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-primary">{loadingMessage}</p>
                </div>
            </div>
          )}

          {error && <p className="mt-6 text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
          
          {videoUrl && (
             <div className="mt-8">
                 <h3 className="text-xl font-bold text-center mb-4 text-primary">Votre Vidéo est Prête !</h3>
                 <video src={videoUrl} controls className="w-full rounded-lg shadow-md" />
                 <div className="text-center mt-4">
                    <a 
                        href={videoUrl} 
                        download={`souvenir-jardin-du-saveur.mp4`}
                        className="inline-block bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-primary-dark transition"
                    >
                        Télécharger la Vidéo
                    </a>
                 </div>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoGenerator;