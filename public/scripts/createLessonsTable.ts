// scripts/createLessonsTable.ts
import { supabase } from '../lib/supabase'

async function createLessonsTable() {
  const { error } = await supabase.rpc('exec', {
    sql: `
      create table if not exists lessons (
        id uuid primary key default gen_random_uuid(),
        title text not null,
        content text,
        video_url text,
        image_url text,
        tags text[],
        author_id uuid,
        created_at timestamp with time zone default now()
      );
    `
  })

  if (error) {
    console.error('❌ Error creating table:', error.message)
  } else {
    console.log('✅ Lessons table created successfully!')
  }
}

createLessonsTable()
