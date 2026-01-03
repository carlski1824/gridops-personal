import { AiCommandBar } from '@/components/ai-command-bar';

export default function Home() {
  return (
    <main className="p-8">
      <h2 className="text-xl font-semibold text-white mb-6">Workspace</h2>
      <AiCommandBar />
      <div className="mt-12 text-neutral-400">
        Your AI-generated tables will appear here.
      </div>
    </main>
  )
}
