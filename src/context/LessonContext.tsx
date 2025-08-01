// src/context/LessonContext.tsx
'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Lesson = {
  id: string
  title: string
  content: string
  video_url?: string
  image_url?: string
  tags?: string[]
  created_at: string
}

type LessonContextType = {
  lessons: Lesson[]
  addLesson: (lesson: Lesson) => void
}

const LessonContext = createContext<LessonContextType | undefined>(undefined)

export function LessonProvider({ children }: { children: ReactNode }) {
  const [lessons, setLessons] = useState<Lesson[]>([])

  function addLesson(lesson: Lesson) {
    setLessons((prev) => [lesson, ...prev])
  }

  return (
    <LessonContext.Provider value={{ lessons, addLesson }}>
      {children}
    </LessonContext.Provider>
  )
}

export function useLessons() {
  const context = useContext(LessonContext)
  if (!context) throw new Error('useLessons must be used inside LessonProvider')
  return context
}

