import IconService from "icon-sdk-js";
import { HttpProvider } from "web3";
import { useState, useEffect } from "react";

const Iconweb = () => {
  const httpProvider = new HttpProvider("https://ctz.solidwallet.io/api/v3");
  const iconService = new IconService(httpProvider);
  const [hasAccount, setHasAccount] = useState(false);
  const [address, setAddress] = useState("");

  function handleConnect() {
    window.dispatchEvent(
      new CustomEvent("ICONEX_RELAY_REQUEST", {
        detail: {
          type: "REQUEST_HAS_ADDRESS",
        },
      })
    );
  }
  useEffect(() => {
    function handleResponse(event) {
      const { type, payload } = event.detail;

      if (type === "RESPONSE_HAS_ADDRESS") {
        setHasAccount(payload);
      }
    }

    window.addEventListener("ICONEX_RELAY_RESPONSE", handleResponse);

    return () => {
      window.removeEventListener("ICONEX_RELAY_RESPONSE", handleResponse);
    };
  }, []);

  // Event handler function

  return (
    <div className="pl-10">
      <button
        className="text-blue-400 bg-transparent border border-blue-400 w-64 h-10"
        onClick={handleConnect}
      >
        Do I have wallets in my ICONex?
      </button>
      <p>{hasAccount}</p>
      {/* <button
        className="text-blue-400 bg-transparent border border-blue-400 w-64 h-10"
        onClick={handleConnect}
      >
        What is my address
      </button>
      <p>{address}</p> */}
    </div>
  );
};

export default Iconweb;
