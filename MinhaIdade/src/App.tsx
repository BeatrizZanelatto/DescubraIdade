import React, { useState } from 'react';
import './App.css'; // Importe seu arquivo de estilos CSS

function App() {
  const [nome, setNome] = useState('');
  const [anoNascimento, setAnoNascimento] = useState('');
  const [idade, setIdade] = useState('');

  const calcularIdade = () => {
    const anoAtual = new Date().getFullYear();
    const idadeCalculada = anoAtual - parseInt(anoNascimento, 10);
    setIdade(idadeCalculada);
  };

  return (
    <div className="container">
      <h1>Descubra a sua idade</h1>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Ano de Nascimento:
        <input
          type="number"
          value={anoNascimento}
          onChange={(e) => setAnoNascimento(e.target.value)}
        />
      </label>
      <button onClick={calcularIdade}>Calcular idade</button>
      {idade !== '' && (
        <p>
          Olá {nome}, você tem: {idade} anos.
        </p>
      )}
    </div>
  );
}

export default App;