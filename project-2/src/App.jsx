import { useState } from "react";
import PlayGame from "./components/PlayGame";
import StartGame from "./components/StartGame";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? (
        <StartGame />
      ) : (
        <PlayGame toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
};

export default App;
