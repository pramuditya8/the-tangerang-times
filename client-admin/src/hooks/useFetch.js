import { useEffect, useState } from "react";

export const useFetch = (entity = "") => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000" + entity);
        if (!res.ok) {
          throw await res.text();
        }
        const value = await res.json();
        setData(value);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }
    fetchData();
  }, []);

  return [data, loading];
};
