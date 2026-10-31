import React, { useState } from 'react';
import { Car, PoundSterling, ShieldCheck, Clock, MapPin, CheckCircle, Navigation, TrendingUp } from 'lucide-react';

export default function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [rides, setRides] = useState([
    { id: 1, pickup: 'Heathrow Terminal 5', dropoff: 'Piccadilly Circus', fare: '£45.00', status: 'Pending' },
    { id: 2, pickup: 'King\'s Cross Station', dropoff: 'Canary Wharf', fare: '£28.50', status: 'Pending' }
  ]);

  const acceptRide = (id) => {
    setRides(rides.map(r => r.id === id ? { ...r, status: 'Accepted' } : r));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-amber-400 p-2 rounded-xl text-slate-950">
            <Car className="w-6 h-6 stroke-[2.5]" />
          </div>
          <span className="text-xl font-bold tracking-wide text-white">Flat<span className="text-amber-400">Cab</span></span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOnline(!isOnline)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
              isOnline ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}
          >
            {isOnline ? '● Online & Available' : '○ Offline'}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 space-y-6">
        {/* Subscription Value Proposition Banner */}
        <div className="bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent border border-amber-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">Driver Subscription</span>
              <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5"/> Active Plan</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Keep 100% of Your Fares</h2>
            <p className="text-slate-400 text-sm">Fixed subscription rate: <strong className="text-amber-400">£150/month</strong>. Zero commission fees on any ride.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl text-right font-mono">
            <span className="text-xs text-slate-400 block">Next Renewal</span>
            <span className="text-sm font-semibold text-white">1st of Next Month</span>
          </div>
        </div>

        {/* Driver Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-sm font-medium">Today's Profit</span>
              <PoundSterling className="w-5 h-5 text-amber-400" />
            </div>
            <p className="text-3xl font-black text-white">£173.50</p>
            <span className="text-xs text-emerald-400 flex items-center gap-1 mt-2"><TrendingUp className="w-3.5 h-3.5"/> 100% Kept by you</span>
          </div>

          <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-sm font-medium">Completed Rides</span>
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-black text-white">8</p>
            <span className="text-xs text-slate-400 block mt-2">Avg. £21.68 per trip</span>
          </div>

          <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-sm font-medium">Hours Online</span>
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-3xl font-black text-white">5h 20m</p>
            <span className="text-xs text-slate-400 block mt-2">Active shift</span>
          </div>
        </div>

        {/* Live Ride Requests */}
        <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Navigation className="w-5 h-5 text-amber-400" /> Available Dispatch Requests
          </h3>

          <div className="space-y-3">
            {rides.map((ride) => (
              <div key={ride.id} className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pickup: <strong className="text-white">{ride.pickup}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Dropoff: <strong className="text-white">{ride.dropoff}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-between border-t md:border-t-0 border-slate-800 pt-3 md:pt-0">
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Fare Value</span>
                    <span className="text-xl font-black text-amber-400">{ride.fare}</span>
                  </div>

                  {ride.status === 'Pending' ? (
                    <button 
                      onClick={() => acceptRide(ride.id)}
                      className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 text-sm"
                    >
                      Accept Ride
                    </button>
                  ) : (
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold px-4 py-2 rounded-xl text-sm flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" /> Accepted
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
