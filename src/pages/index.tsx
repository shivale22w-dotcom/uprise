// src/pages/index.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-6 text-center space-y-6">
      <h1 className="text-3xl font-bold">🌟 Welcome to Uprise MVP</h1>
      <p className="text-gray-700">Learn. Teach. Rise together.</p>
      <div className="space-x-4">
        <Link href="/lessons" className="bg-blue-600 text-white px-4 py-2 rounded">View Lessons</Link>
        <Link href="/create" className="bg-green-600 text-white px-4 py-2 rounded">Create Lesson</Link>
      </div>
    </main>
  )
}
