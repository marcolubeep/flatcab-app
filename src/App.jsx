import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-amber-400">FlatCab Platform</h1>
        <p className="text-slate-300 text-lg">
          Drivers pay a £150 monthly subscription and keep 100% of their profits.
        </p>
        <div className="inline-block bg-slate-800 border border-slate-700 px-6 py-3 rounded-xl shadow-lg text-emerald-400 font-medium">
          Status: Live & Deployed Successfully 🚀
        </div>
      </div>
    </div>
  );
}