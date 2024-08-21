import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";

import "./quote.css";

const QuoteCrad = ({ data, fetchData, author, listenQuote }) => {
  const notify = () => {
    toast.success("copied");
    navigator.clipboard.writeText(data + " " + "by" + " " + author);
  };

  return (
    <div className="quote-card">
      <h1 className="quote-title">Quote of the day</h1>
      <q className="quote">{data}</q>
      <span className="quote-author">__{author}.</span>
      <span className="seprator"></span>
      <div className="quote-buttons">
        <div className="quote-icon">
          <FaVolumeHigh onClick={listenQuote} />
          <span></span>
          <FaRegCopy onClick={notify} />
        </div>
        <button onClick={fetchData}>new quote</button>
      </div>
    </div>
  );
};

export default QuoteCrad;
