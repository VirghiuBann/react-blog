import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error('Fetching data failed');
        }
        const data = await resp.json();
        setData(data);
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    }
    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
