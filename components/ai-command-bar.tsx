'use client'

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export function AiCommandBar() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!prompt.trim()) return;
    console.log('AI Prompt:', prompt);
    // TODO: Connect this to the AI API
    setPrompt('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Sparkles className="h-5 w-5 text-neutral-400" />
        </div>
        <input
          type="text"
          name="prompt"
          id="prompt"
          className="block w-full pl-10 pr-3 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
          placeholder="Ask AI to create a table, fetch data, or analyze..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
    </form>
  );
}
