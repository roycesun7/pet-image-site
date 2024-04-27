import { useState, useEffect } from 'react';

// Define a TypeScript interface for the pet data expected from the API
interface Pet {
  imageUrl: string;
  title: string;
  description: string;
  created: string; 
}

// Define the return type of the useFetchPets hook
interface UseFetchPetsReturnType {
  data: Pet[];
  loading: boolean;
  error: string | null;
}

// The URL is now an argument to the hook, so you can reuse this hook for other endpoints if needed
const useFetchPets = (url: string): UseFetchPetsReturnType => {
  const [data, setData] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json: Pet[] = await response.json();
        setData(json);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchPets;
