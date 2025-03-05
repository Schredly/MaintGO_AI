import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fjbelrqgkinklevqejqi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqYmVscnFna2lua2xldnFlanFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMTI5NzMsImV4cCI6MjA1NjY4ODk3M30._7p1TuaMfFP3m0x7Z0Mt8Q9axdnJf31ZULBkcWTLq3U';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
