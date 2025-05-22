# Faiz-Notes

Faiz-Notes is an AI-powered note-taking application that allows users to create, edit, delete, and search through notes with real-time autosaving and GPT-based AI support. Users can ask questions about their notes and get concise, context-aware responses. The app is built with Next.js and integrates Supabase for authentication and database management, Prisma for ORM, and OpenAI for AI capabilities.

This project was created as a way to combine practical note-taking with the power of language models, aiming to help users better understand and retrieve the information they store. The UI is clean and responsive, with built-in fuzzy search and AI integration that enables powerful interaction with your own content. Future plans include adding support for categories, markdown formatting, and multi-user collaboration.

## Features

- User authentication using Supabase
- Note creation with autosave and real-time updates
- Fuzzy search across notes using Fuse.js
- Ask AI questions about your notes using GPT
- Sidebar to browse and select notes
- Responsive design and clean UI with ShadCN and Tailwind

## Tech Stack

- Frontend: Next.js 14 (App Router), React, Tailwind CSS, ShadCN UI
- Backend: Supabase (Auth, PostgreSQL)
- ORM: Prisma
- AI Integration: OpenAI GPT API
- Search: Fuse.js

## Getting Started (Local Development)

To run Faiz-Notes locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/faiz-notes.git
   cd faiz-notes
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up your local environment:

   Create a `.env.local` file in the root directory and define the following environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   OPENAI_API_KEY=your-openai-api-key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   **Note**: You must replace `OPENAI_API_KEY` with your own API key from OpenAI. The API will not work unless this is set correctly.

4. Generate Prisma types:
   ```bash
   pnpm dlx prisma generate
   ```

5. Run the development server:
   ```bash
   pnpm dev
   ```

6. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Deployment Notes


