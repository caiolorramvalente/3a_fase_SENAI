import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

// Configurar a URL do servidor, se for em um ambiente local, use localhost:3000
const socket = io('http://localhost:3100');

function App() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [toUserId, setToUserId] = useState('');
  const [portfolio, setPortfolio] = useState([]);
  const [newPortfolio, setNewPortfolio] = useState({
    nome: '',
    autor: '',
    img: '',
    avaliacao: '',
  });

  // Função para carregar o portfólio da API
  const fetchPortfolio = async () => {
    const response = await fetch('http://localhost:3100');
    const data = await response.json();
    setPortfolio(data);
  };

  // Carregar o portfólio quando o componente for montado
  useEffect(() => {
    fetchPortfolio();
  }, []);

  // Atualizar a lista de mensagens
  useEffect(() => {
    socket.on('chat-message', (data) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        `De ${data.fromUserId}: ${data.message}`,
      ]);
    });

    return () => {
      socket.off('chat-message'); // Limpar o ouvinte quando o componente for desmontado
    };
  }, []);

  // Enviar a mensagem
  const sendMessage = () => {
    if (message && toUserId) {
      socket.emit('chat-message', { toUserId, message });
      setMessage('');
    }
  };

  // Enviar um novo portfólio
  const postPortfolio = async () => {
    const response = await fetch('http://localhost:3100/postarPortifolio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPortfolio),
    });

    if (response.ok) {
      alert('Portfólio adicionado com sucesso!');
      fetchPortfolio(); // Atualizar o portfólio
    } else {
      alert('Erro ao adicionar portfólio!');
    }
  };

  return (
    <div className="App">
      <h1>Chat e Portfólio</h1>

      <div className="chat">
        <h2>Chat entre dois usuários</h2>
        <input
          type="text"
          placeholder="Digite seu ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite o ID do destinatário"
          value={toUserId}
          onChange={(e) => setToUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>

        <div>
          <h3>Mensagens</h3>
          {chatMessages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </div>

      <div className="portfolio">
        <h2>Portfólio</h2>

        {/* Formulário para adicionar nova obra */}
        <input
          type="text"
          placeholder="Nome da Obra"
          value={newPortfolio.nome}
          onChange={(e) => setNewPortfolio({ ...newPortfolio, nome: e.target.value })}
        />
        <input
          type="text"
          placeholder="Autor"
          value={newPortfolio.autor}
          onChange={(e) => setNewPortfolio({ ...newPortfolio, autor: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL da Imagem"
          value={newPortfolio.img}
          onChange={(e) => setNewPortfolio({ ...newPortfolio, img: e.target.value })}
        />
        <input
          type="number"
          placeholder="Avaliação"
          value={newPortfolio.avaliacao}
          onChange={(e) => setNewPortfolio({ ...newPortfolio, avaliacao: e.target.value })}
        />
        <button onClick={postPortfolio}>Adicionar Obra</button>

        <div>
          <h3>Obras no Portfólio</h3>
          {portfolio.map((obra) => (
            <div key={obra.id} className="portfolio-item">
              <img src={obra.img} alt={obra.nome} />
              <p><strong>{obra.nome}</strong></p>
              <p>Autor: {obra.autor}</p>
              <p>Avaliação: {obra.avaliacao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;