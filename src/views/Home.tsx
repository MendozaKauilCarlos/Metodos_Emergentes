import React, { useState } from 'react';
import { Phone, ToggleLeft, ToggleRight, ChevronRight, Bell, Route, MapPin, Star, Clock, User, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  // Forzamos la vista de conductor para que siempre veas el diseño correcto
  const isDriver = true; 
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f2f5] dark:bg-zinc-900 text-[#2d3748] dark:text-zinc-100 pb-24 font-sans transition-colors duration-200">
      {/* Header Exacto */}
      <header className="bg-white dark:bg-zinc-800 px-6 py-4 sticky top-0 z-10 shadow-sm flex justify-between items-center transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00d4aa] rounded-full flex items-center justify-center text-white">
            <User size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#718096] dark:text-zinc-400 font-medium">¡Buenas tardes!</span>
            <span className="text-[13px] font-bold text-[#2d3748] dark:text-zinc-100 uppercase tracking-wide">PAKO</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <Bell size={24} className="text-[#4a5568] dark:text-zinc-300 fill-[#4a5568] dark:fill-zinc-300" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#e74c3c] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-800">6</span>
          </div>
          <Menu size={28} className="text-[#4a5568] dark:text-zinc-300 cursor-pointer" />
        </div>
      </header>

      <main className="p-4 md:p-8 max-w-[1200px] mx-auto space-y-4 mt-2">
        
        {/* Botón Emergencia */}
        <button className="w-full bg-[#e74c3c] hover:bg-[#d64536] text-white p-5 rounded-xl flex items-center justify-between transition-colors shadow-sm">
          <div className="flex items-center gap-4">
            <Phone size={26} className="fill-white" />
            <div className="text-left">
              <p className="font-bold text-[17px] leading-tight">Emergencia 911</p>
              <p className="text-[12px] text-white/90 mt-0.5 font-medium">Llamar a emergencias</p>
            </div>
          </div>
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Botón Conectarse */}
        <button 
          onClick={() => setIsOnline(!isOnline)}
          className="w-full bg-[#00d4aa] hover:bg-[#00bfa0] text-white p-5 rounded-xl flex items-center justify-between transition-colors shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              {isOnline ? <ToggleRight size={26} className="text-white" /> : <ToggleLeft size={26} className="text-white" />}
            </div>
            <div className="text-left">
              <p className="font-bold text-[17px] leading-tight">{isOnline ? 'Conectado' : 'Conectarse'}</p>
              <p className="text-[12px] text-white/90 mt-0.5 font-medium">
                {isOnline ? 'Recibiendo solicitudes' : 'Disponible para recibir viajes'}
              </p>
            </div>
          </div>
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Menú de Opciones */}
        <div className="space-y-3 mt-6">
          <button onClick={() => navigate('/driver/requests')} className="w-full bg-white dark:bg-zinc-800 p-5 rounded-xl flex items-center justify-between transition-colors shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-700">
            <div className="flex items-center gap-4">
              <Bell size={22} className="text-[#718096] dark:text-zinc-400 fill-[#718096] dark:fill-zinc-400" />
              <div className="text-left">
                <p className="font-bold text-[#2d3748] dark:text-zinc-100 text-[16px] leading-tight">Solicitudes de Viaje</p>
                <p className="text-[12px] text-[#718096] dark:text-zinc-400 mt-0.5 font-medium">Ver viajes solicitados</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-[#a0aec0] dark:text-zinc-500" />
          </button>

          <button onClick={() => navigate('/driver/active')} className="w-full bg-white dark:bg-zinc-800 p-5 rounded-xl flex items-center justify-between transition-colors shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-700">
            <div className="flex items-center gap-4">
              <Route size={22} className="text-[#718096] dark:text-zinc-400" />
              <div className="text-left">
                <p className="font-bold text-[#2d3748] dark:text-zinc-100 text-[16px] leading-tight">Viajes Activos</p>
                <p className="text-[12px] text-[#718096] dark:text-zinc-400 mt-0.5 font-medium">Gestionar viajes en curso</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-[#a0aec0] dark:text-zinc-500" />
          </button>

          <button onClick={() => navigate('/driver/create-route')} className="w-full bg-white dark:bg-zinc-800 p-5 rounded-xl flex items-center justify-between transition-colors shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-700">
            <div className="flex items-center gap-4">
              <MapPin size={22} className="text-[#718096] dark:text-zinc-400 fill-[#718096] dark:fill-zinc-400" />
              <div className="text-left">
                <p className="font-bold text-[#2d3748] dark:text-zinc-100 text-[16px] leading-tight">Crear Ruta</p>
                <p className="text-[12px] text-[#718096] dark:text-zinc-400 mt-0.5 font-medium">Crear una ruta recurrente</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-[#a0aec0] dark:text-zinc-500" />
          </button>
        </div>

        {/* Estadísticas */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-[18px] font-bold text-[#2d3748] dark:text-zinc-100">Viajes Recientes</h2>
            <button className="text-[#00d4aa] text-[13px] font-medium hover:underline">Ver todos</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-sm flex items-center gap-4 transition-colors duration-200">
              <div className="w-12 h-12 bg-[#00d4aa] rounded-xl flex items-center justify-center text-white shrink-0">
                <Route size={24} />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-3xl text-[#2d3748] dark:text-zinc-100">12</span>
                <span className="text-[10px] text-[#718096] dark:text-zinc-400 uppercase font-bold leading-tight max-w-[80px]">Viajes Completados</span>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-sm flex items-center gap-4 transition-colors duration-200">
              <div className="w-12 h-12 bg-[#00d4aa] rounded-xl flex items-center justify-center text-white shrink-0">
                <Star size={24} className="fill-white" />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-3xl text-[#2d3748] dark:text-zinc-100">4.8</span>
                <span className="text-[10px] text-[#718096] dark:text-zinc-400 uppercase font-bold leading-tight max-w-[80px]">Calificación</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-sm flex items-center gap-4 transition-colors duration-200">
              <div className="w-12 h-12 bg-[#00d4aa] rounded-xl flex items-center justify-center text-white shrink-0">
                <Clock size={24} className="fill-white" />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-3xl text-[#2d3748] dark:text-zinc-100">2.5h</span>
                <span className="text-[10px] text-[#718096] dark:text-zinc-400 uppercase font-bold leading-tight max-w-[80px]">Tiempo Ahorrado</span>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}

