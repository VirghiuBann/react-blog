import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const resp = await fetch(url, { signal: abortController.signal });
        if (!resp.ok) {
          throw new Error('Fetching data failed');
        }
        const data = await resp.json();
        setData(data);
        setIsPending(false);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('aborted', error.message);
        } else {
          setIsPending(false);
          setError(error.message);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
