import Card from "@/components/ui/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios("https://api.quotable.io/random");
      const text = await response.data;
      setQuote(text);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    <div>Loading</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold mb-2">Quote of the day</h2>
      <p className=" text-gray-600 text-sm">{quote?.content}</p>
      <p className=" text-gray-400 text-sm">- {quote?.author}</p>

      <button
        className="btn-primary btn-sm self-end"
        onClick={() => fetchData()}
      >
        New Quote
      </button>
    </div>
  );
};

export default Quote;
