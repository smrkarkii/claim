import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Landing } from "./pages/Landing";
import "./index.css";
import Iconweb from "./pages/iconweb";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>
      {/* <Iconweb /> */}
      <Landing />
    </>
  );
}

export default App;
