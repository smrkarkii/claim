import { useState, useEffect } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import Leaderboard from "../components/Leaderboard";

export const Landing = () => {
  const [toClaim, setToClaim] = useState();
  const [amountSponsored, setAmountSponsored] = useState(0);
  const [availableToken, setAvailableToken] = useState(4600);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;

    if (value > availableToken) {
      setError("Can't claim more than available tokens");
    } else {
      setError("");
      setToClaim(value);
    }
  };

  useEffect(() => {
    setAmountSponsored(availableToken - toClaim);

    console.log("claimed, sponsored", toClaim, availableToken - toClaim);
  }, [toClaim, availableToken]);
  return (
    <>
      <div className="flex items-center pl-32 absolute top-5">
        <CurrencyDollarIcon className="w-10 h-10 inline-block" />
        <span className="text-2xl"> {availableToken}</span>
      </div>
      <div className="pl-32 pt-5 flex flex-row">
        <div className="flex flex-row bg-gray-200 px-16 h-96 mx-auto pt-10 mt-5 shadow-md shadow-gray-400 ">
          <div className="flex flex-col">
            <p className="italic">Claim your available tokens.</p>
            <input
              type="text"
              id="hash"
              name="hash"
              className="pl-3 border border-gray-400 h-10 w-64"
              onChange={handleChange}
              value={toClaim}
            />
            {error ? (
              <p className="text-red-500 text-sm ">{error}</p>
            ) : (
              toClaim > 0 &&
              amountSponsored >= 0 && (
                <p>{amountSponsored} will be sponsored.</p>
              )
            )}
          </div>
          <div className="pl-5 pt-6">
            <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-32">
              Claim token
            </button>
          </div>
        </div>
        <div className="mx-auto mt-5">
          <Leaderboard />
        </div>
      </div>
    </>
  );
};

export default Landing;
