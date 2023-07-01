import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This will be logged every time this effect is run
    console.log("use effect ran");

    // We use setTimeout to simulate a delay in the response from the server
    setTimeout(() => {
      // Make a fetch request to the server
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          // When the request is done, parse the response as JSON
          return res.json();
        })
        .then((data) => {
          // Once the data is ready, log it to the console
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // If there is an error, log it to the console
          setError(err.message);
          setIsPending(false);
        });
      // Since the dependency array is empty, this effect will only run once, when the component is first rendered
    }, 1000);

    return () => console.log("cleanup");
  }, []);

  return { data, isPending, error };
};

export default useFetch;
