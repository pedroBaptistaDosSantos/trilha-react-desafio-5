import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://dwacyzxjlieydzqbvkvu.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3YWN5enhqbGlleWR6cWJ2a3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMTE5MjEsImV4cCI6MjA0Nzc4NzkyMX0.HEO9NE0rqZt1x2W2YAl0oVkzuB86YsM5g_rFkuya0j8",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3YWN5enhqbGlleWR6cWJ2a3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMTE5MjEsImV4cCI6MjA0Nzc4NzkyMX0.HEO9NE0rqZt1x2W2YAl0oVkzuB86YsM5g_rFkuya0j8"
    }
})