import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mgokkpgvjdrygwsqkcms.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nb2trcGd2amRyeWd3c3FrY21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTU5NzUsImV4cCI6MjA2ODk3MTk3NX0.VUTPjEeDR3VnFd7NKcQLkZbDWP2n-e6mdlhQQYT-cbc";
console.log(supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// import { createClient } from '@supabase/supabase-js';

// console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
// console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_KEY);

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
