// src/components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">🚀 Uprise</h1>
      <div className="space-x-4">
        <Link href="/lessons" className="hover:underline">Lessons</Link>
        <Link href="/create" className="hover:underline">Create</Link>
      </div>
    </nav>
  )
}
