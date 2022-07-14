import logo from "./logo.svg";
import "./App.css";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import DuckSvg from "./assets/DuckSvg";

function App() {
  const fireworkBurst = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  useEffect(() => {
    fireworkBurst();
  }, []);

  return (
    <div className="App" onClick={() => fireworkBurst()}>
      <header className="App-header">
        <p>
          Feliz aniversário de
        </p>
        <div
          style={{
            width: 200,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <DuckSvg />
          <DuckSvg />
        </div>
        <p>
          anos, mô mô!
        </p>
      </header>
    </div>
  );
}

export default App;
