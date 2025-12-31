import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://nsahboxyyyxftsdecuky.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjBiNWRjZTljLTZlMTctNDFhZi05Nzk4LTQ0ZDY2NDVhYjY2YiJ9.eyJwcm9qZWN0SWQiOiJuc2FoYm94eXl5eGZ0c2RlY3VreSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzY3MTkxNzgxLCJleHAiOjIwODI1NTE3ODEsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.cRG3B8A1RnZfh0s99YuYkMFbs-BXKmjWnimfcTAagbE';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };