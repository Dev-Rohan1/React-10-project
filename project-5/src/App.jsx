import { useEffect, useState } from "react";
import QuoteCrad from "./components/QuoteCrad";

const App = () => {
  const [data, setData] = useState();
  const [author, setAuthor] = useState();

  const listenQuote = () => {
    const utteranse = new SpeechSynthesisUtterance(data + " by " + author);
    speechSynthesis.speak(utteranse);
  };

  const fetchData = () => {
    const API_URL = "https://api.api-ninjas.com/v1/quotes";

    try {
      fetch(API_URL, {
        headers: { "X-Api-Key": "Paste Your Api Key Here" },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data[0].quote);
          setAuthor(data[0].author);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <QuoteCrad
      data={data}
      fetchData={fetchData}
      author={author}
      listenQuote={listenQuote}
    />
  );
};

export default App;
