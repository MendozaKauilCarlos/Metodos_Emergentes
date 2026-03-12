import React, { useState } from 'react';
import { ArrowLeft, Moon, Sun, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  const [pushEnabled, setPushEnabled] = useState(true);
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#f0f2f5] dark:bg-zinc-900 text-[#2d3748] dark:text-zinc-100 pb-24 font-sans transition-colors duration-200">
      
      {/* Header */}
      <header className="bg-white dark:bg-zinc-800 px-4 py-4 sticky top-0 z-10 shadow-sm flex items-center gap-4 transition-colors duration-200">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
        >
          <ArrowLeft size={24} className="text-[#2d3748] dark:text-zinc-100" />
        </button>
        <h1 className="text-xl font-bold text-[#2d3748] dark:text-zinc-100">Configuración</h1>
      </header>

      <main className="p-4 md:p-8 max-w-[800px] mx-auto mt-2 space-y-8">
        
        {/* Apariencia */}
        <section>
          <h2 className="text-[15px] font-bold text-[#2d3748] dark:text-zinc-100 mb-3 px-1">Apariencia</h2>
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-zinc-700 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[15px] font-bold text-[#2d3748] dark:text-zinc-100">Tema</h3>
                <p className="text-[12px] text-[#718096] dark:text-zinc-400 mt-0.5">Cambiar entre modo claro y oscuro</p>
              </div>
              
              <div className="flex items-center bg-gray-100 dark:bg-zinc-900 rounded-full p-1">
                <button
                  onClick={() => theme === 'dark' && toggleTheme()}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    theme === 'light' 
                      ? 'bg-[#00d4aa] text-white shadow-sm' 
                      : 'text-[#718096] dark:text-zinc-400 hover:text-[#2d3748] dark:hover:text-zinc-200'
                  }`}
                >
                  <Sun size={16} />
                  Claro
                </button>
                <button
                  onClick={() => theme === 'light' && toggleTheme()}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    theme === 'dark' 
                      ? 'bg-[#00d4aa] text-white shadow-sm' 
                      : 'text-[#718096] dark:text-zinc-400 hover:text-[#2d3748] dark:hover:text-zinc-200'
                  }`}
                >
                  <Moon size={16} />
                  Oscuro
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Notificaciones */}
        <section>
          <h2 className="text-[15px] font-bold text-[#2d3748] dark:text-zinc-100 mb-3 px-1">Notificaciones</h2>
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-zinc-700 space-y-4 transition-colors duration-200">
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[15px] font-bold text-[#2d3748] dark:text-zinc-100">Notificaciones Push</h3>
                <p className="text-[12px] text-[#718096] dark:text-zinc-400 mt-0.5">Recibir notificaciones en tiempo real</p>
              </div>
              <button 
                onClick={() => setPushEnabled(!pushEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${pushEnabled ? 'bg-[#00d4aa]' : 'bg-gray-300 dark:bg-zinc-600'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${pushEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>

            <div className="h-[1px] bg-gray-100 dark:bg-zinc-700 w-full" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[15px] font-bold text-[#2d3748] dark:text-zinc-100">Sonidos</h3>
                <p className="text-[12px] text-[#718096] dark:text-zinc-400 mt-0.5">Reproducir sonidos de notificación</p>
              </div>
              <button 
                onClick={() => setSoundsEnabled(!soundsEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${soundsEnabled ? 'bg-[#00d4aa]' : 'bg-gray-300 dark:bg-zinc-600'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${soundsEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>

          </div>
        </section>

        {/* Privacidad */}
        <section>
          <h2 className="text-[15px] font-bold text-[#2d3748] dark:text-zinc-100 mb-3 px-1">Privacidad</h2>
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-zinc-700 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[15px] font-bold text-[#2d3748] dark:text-zinc-100">Ubicación</h3>
                <p className="text-[12px] text-[#718096] dark:text-zinc-400 mt-0.5">Compartir ubicación con la aplicación</p>
              </div>
              <button 
                onClick={() => setLocationEnabled(!locationEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${locationEnabled ? 'bg-[#00d4aa]' : 'bg-gray-300 dark:bg-zinc-600'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${locationEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
