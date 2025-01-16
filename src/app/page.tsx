// src/app/page.tsx
import DeveloperCard from "../app/components/DeveloperCard";
import { Developer } from "../app/lib/types";
import api from "../app/lib/api";

export const revalidate = 10; // Revalidar los datos cada 10 segundos

async function fetchDevelopers() {
  try {
    const response = await api.get("/developers");
    return response.data as Developer[];
  } catch (error) {
    console.error("Error fetching developers:", error);
    return [];
  }
}

export default async function Home() {
  const developers = await fetchDevelopers();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat mb-4 text-center pt-8">
        Next.js - Node.js - Express.js - Tailwind - Supabase
      </h1>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat mb-4 text-center pb-4">
        Next.js - Tailwind Front End that consumes REST controller created with
        Node.js, Express.js. Database: Supabase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
}
