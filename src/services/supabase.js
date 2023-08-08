import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://anskslnlniscowmhlkhm.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuc2tzbG5sbmlzY293bWhsa2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDQxODgsImV4cCI6MjAwNjgyMDE4OH0.2bjRctncjOlqK1dJ4c1Oh8o_Z-Sfc2b05W4MDWtDbCs'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
