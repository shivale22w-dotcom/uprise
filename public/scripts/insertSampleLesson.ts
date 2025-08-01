// scripts/insertSampleLesson.ts
import { supabase } from '../lib/supabase'

async function insertSampleLesson() {
  const { data, error } = await supabase.from('lessons').insert([
    {
      title: 'Intro to Uprise',
      content: 'This is the first lesson of Uprise microlearning.',
      video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image_url: 'https://via.placeholder.com/300',
      tags: ['genz', 'learning', 'peer'],
      author_id: null // or provide a UUID if using auth
    }
  ])

  if (error) {
    console.error('❌ Error inserting lesson:', error.message)
  } else {
    console.log('✅ Lesson inserted:', data)
  }
}

insertSampleLesson()
