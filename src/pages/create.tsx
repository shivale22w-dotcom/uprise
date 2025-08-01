// src/pages/create.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useLessons } from '@/context/LessonContext'
import { v4 as uuid } from 'uuid'

export default function CreateLesson() {
  const router = useRouter()
  const { addLesson } = useLessons()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [video, setVideo] = useState('')
  const [image, setImage] = useState('')
  const [tags, setTags] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newLesson = {
      id: uuid(),
      title,
      content,
      video_url: video,
      image_url: image,
      tags: tags.split(',').map((t) => t.trim()),
      created_at: new Date().toISOString(),
    }

    addLesson(newLesson)
    router.push('/lessons')
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">➕ Create Lesson</h1>

      <input className="w-full border p-2 rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="w-full border p-2 rounded" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <input className="w-full border p-2 rounded" placeholder="Video URL" value={video} onChange={(e) => setVideo(e.target.value)} />
      <input className="w-full border p-2 rounded" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <input className="w-full border p-2 rounded" placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} />

      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Create</button>
    </form>
  )
}




