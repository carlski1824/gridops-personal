'use client'

import { Plus, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-800 p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-white mb-8">GridOps</h1>
      <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
        <Plus className="w-5 h-5 mr-2" /> New Table
      </button>
      <nav className="mt-8 flex-1">
        {/* Navigation items will go here */}
      </nav>
      <div className="p-2 border-t border-neutral-700">
        <button className="flex items-center w-full text-neutral-400 hover:text-white">
          <Settings className="w-5 h-5 mr-2" /> Settings
        </button>
      </div>
    </aside>
  )
}
