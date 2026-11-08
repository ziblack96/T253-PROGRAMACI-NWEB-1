import { useState } from "react";
import "./App.css";

function App() {
  const [Contador, setContador] = useState<number>(0);

  const incrementoContador = (): void => {
    setContador((prevContador) => prevContador + 1);
  };

  const decrementoContador = (): void => {
    if (Contador <= 0) {
      setContador(0);
    } else {
      setContador((prevContador) => prevContador - 1);
    }
  };

  const resetContador = (): void => {
    setContador(0);
  };

  return (
    <div
      className="flex flex-column justify-content-center items-center
      gap-4
    "
    >
      <h1>Contador Click</h1>
      <button
        type="button"
        onClick={incrementoContador}
        className="bg-green-600 
        text-white font-md px-4 py-2
        rounded-lg hover:bg-green-300 hover:text-black shadow-md
        "
      >
        Button " + "
      </button>
      <p>Valor del Contador: {Contador}</p>
      <button
        type="button"
        onClick={decrementoContador}
        className="bg-red-600 
        text-white font-md px-4 py-2
        rounded-lg hover:bg-red-300 hover:text-black shadow-md
        "
      >
        Button " - "
      </button>{" "}
      <br />
      <button
        type="button"
        onClick={resetContador}
        className="bg-yellow-600 
        text-white font-md px-4 py-2
        rounded-lg hover:bg-yellow-300 hover:text-black shadow-md
        "
      >
        Button Reset
      </button>
    </div>
  );
}

export default App;
