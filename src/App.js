import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [listGanjil, setListGanjil] = useState([]);
  const [listGenap, setListGenap] = useState([]);

  const handleChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleSubmit = () => {
    const number = parseInt(inputNumber);

    if (isNaN(number)) {
      alert('Masukkan angka yang valid!');
      return;
    }

    if (number % 2 === 0) {
      setListGenap((prevList) => [...prevList, number]);
      alert(`${number} adalah angka genap.`);
    } else {
      setListGanjil((prevList) => [...prevList, number]);
      alert(`${number} adalah angka ganjil.`);
    }

    setInputNumber('');
  };

  const handleReset = () => {
    setInputNumber('');
    setListGanjil([]);
    setListGenap([]);
  };

  return (
    <div className="App">
      <h1>Deteksi Angka Ganjil/Genap</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Masukkan angka"
          value={inputNumber}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Proses</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="container">
        <div className="column">
          <h2>Angka Ganjil</h2>
          <ul>
            {listGanjil.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>

        <div className="column">
          <h2>Angka Genap</h2>
          <ul>
            {listGenap.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
