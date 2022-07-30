import React, { useState, useEffect } from "react";

export default function Todo() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(page);
  }, [page]);
  const getData = async (page) => {
    try {
      setLoading(true);
      let s = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
      );
      s = await s.json();
      setData(s);
      setLoading(false);
    } catch (err) {
      console.log("Err");
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => setPage((perv) => perv + 1)}>Next</button>
      <h2>{page}</h2>
      <button disabled={page === 1} onClick={() => setPage((perv) => perv - 1)}>
        Prev
      </button>
      <div>{loading && <h1>Loading</h1>}</div>
      {data.map((el) => (
        <>
          <h1>{el.title}</h1>
        </>
      ))}
    </div>
  );
}
