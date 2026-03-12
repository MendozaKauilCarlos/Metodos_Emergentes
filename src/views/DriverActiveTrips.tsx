import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DriverActiveTrips() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pb-20 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-800 p-4 sticky top-0 z-10 shadow-sm flex items-center gap-4 transition-colors duration-200">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-zinc-800 dark:text-zinc-100" />
        </button>
        <h1 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">Viajes Activos</h1>
      </header>

      <main className="p-4 max-w-md mx-auto">
        {/* Estado Vacío */}
        <div className="flex flex-col items-center justify-center text-center mt-32 opacity-50">
          <div className="relative mb-4">
            <MapPin size={64} className="text-zinc-400 dark:text-zinc-500" />
            <div className="absolute -bottom-2 -right-2 bg-zinc-50 dark:bg-zinc-900 rounded-full p-1 transition-colors duration-200">
              <div className="w-4 h-4 border-2 border-zinc-400 dark:border-zinc-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">No tienes viajes activos</p>
        </div>
      </main>
    </div>
  );
}
