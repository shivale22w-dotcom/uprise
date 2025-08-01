// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fjpcniarkmrejdwxvetb.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqcGNuaWFya21yZWpkd3h2ZXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzc4NjIsImV4cCI6MjA2OTY1Mzg2Mn0.8zXTJ45o_f7OU1l8sSC5oyQcaYKBxTTcRaQnwwH8pWs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
