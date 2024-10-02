import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nqpehvipchgkltvlaomz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcGVodmlwY2hna2x0dmxhb216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MDA1NDQsImV4cCI6MjAzODE3NjU0NH0.OtJKrPWwO2TtRJYDdHurOpjEp4Ku9GuhakiPKCJLpeE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
