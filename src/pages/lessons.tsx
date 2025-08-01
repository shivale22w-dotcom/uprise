// src/pages/lessons.tsx
import { useLessons } from '@/context/LessonContext'

export default function LessonsPage() {
  const { lessons } = useLessons()

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📚 All Lessons</h1>
      {lessons.length === 0 && <p>No lessons found. Create one!</p>}
      {lessons.map((lesson) => (
        <div key={lesson.id} className="border p-4 rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold">{lesson.title}</h2>
          <p className="text-gray-700 mt-1">{lesson.content}</p>

          {lesson.video_url && (
            <iframe
              src={lesson.video_url}
              className="mt-4 w-full aspect-video"
              allowFullScreen
              title="video"
            ></iframe>
          )}

          {lesson.image_url && (
            <img src={lesson.image_url} alt={lesson.title} className="mt-4 rounded" />
          )}

          {Array.isArray(lesson.tags) && lesson.tags.length > 0 && (
            <div className="mt-2 text-sm text-gray-600">
              Tags: {lesson.tags.join(', ')}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}




