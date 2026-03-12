import React from 'react';
import { ArrowLeft, BellOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DriverRequests() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pb-20 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-800 p-4 sticky top-0 z-10 shadow-sm flex items-center gap-4 transition-colors duration-200">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-zinc-800 dark:text-zinc-100" />
        </button>
        <h1 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">Solicitudes de Viaje</h1>
      </header>

      <main className="p-4 max-w-md mx-auto">
        {/* Estado de conexión */}
        <div className="bg-emerald-500 rounded-xl p-3 flex items-center justify-center gap-2 text-white font-medium mb-12 shadow-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          CONECTARSE
        </div>

        {/* Estado Vacío */}
        <div className="flex flex-col items-center justify-center text-center mt-20 opacity-50">
          <BellOff size={64} className="text-zinc-400 dark:text-zinc-500 mb-4" />
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">No hay solicitudes de viaje disponibles</p>
        </div>
      </main>
    </div>
  );
}
