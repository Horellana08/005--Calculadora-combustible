import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fuelType, setFuelType] = useState("regular");
  const [money, setMoney] = useState(0);

  const fuelPrices = {
    regular: 4.05,
    especial: 4.25,
    diesel: 3.96,
  };

  const calculateGallons = () => {
    if (money <= 0) return 0;
    return (money / fuelPrices[fuelType]).toFixed(2);
  };

  return (
    <div className="app-container">
      <h1 className="title">Calculadora de Galones</h1>
      <div className="form">
        <label htmlFor="fuelType">Tipo de Combustible:</label>
        <select
          id="fuelType"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="regular">Regular - $4.05/gal</option>
          <option value="especial">Especial - $4.25/gal</option>
          <option value="diesel">Diesel - $3.96/gal</option>
        </select>

        <label htmlFor="money">Cantidad de Dinero:</label>
        <input
          type="number"
          id="money"
          min="0"
          step="0.01"
          value={money}
          onChange={(e) => setMoney(parseFloat(e.target.value))}
        />

        <div className="total-display">
          <p>Galones que puedes comprar:</p>
          <input
            type="text"
            value={`${calculateGallons()} gal`}
            readOnly
          />
        </div>
      </div>
      {/* Footer */}
<footer className="footer">
        <p>Desarrollado por Henry Orellana</p>
      </footer>
    </div>
  );
};

export default App;
