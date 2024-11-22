import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <style>
        {`
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 20px;
          }
          .card {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin: 10px;
            padding: 20px;
            width: 300px;
            transition: transform 0.2s;
          }
          .card:hover {
            transform: scale(1.05);
          }
          .card-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .card-body {
            font-size: 14px;
            color: #555;
          }
        `}
      </style>
      <h2>Fetched Data</h2>
      <div className="card-container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <div className="card-title">{item.title}</div>
            <div className="card-body">{item.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchDataComponent;