import axios from "axios";
import React, { useCallback } from "react";
import { useQuery } from "react-query";
import "../App.css";

const fetchQuote = async () => {
  const { data } = await axios.get(
    "https://hindi-quotes.vercel.app/random/success"
  );
  return data;
};

const HindiQuotes = () => {
  const { data, isLoading, isError, refetch } = useQuery("quote", fetchQuote);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="card">
      <div className="body">
        <h1>{data.title}</h1>
        <p>{data.quote}</p>
        <button onClick={() => refetch()}>Get New</button>
      </div>
    </div>
  );
};

export default HindiQuotes;
