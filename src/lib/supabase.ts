import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://vptomtcrgzknhkvmbuar.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdG9tdGNyZ3prbmhrdm1idWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NDQ1MTgsImV4cCI6MjA3NzEyMDUxOH0.Y-VVUrUJ6PxfqyWvAt4fHDbnzgz2dBXKkW-8XTu4DGU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
