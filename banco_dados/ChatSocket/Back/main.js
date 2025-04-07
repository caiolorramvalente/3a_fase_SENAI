const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');

const App = express();

let vetorObras = [{
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrEhtb61lx3JBGlJdHvIgxK1mfcTVP-sedQ&s',
    nome: 'Cuidar de cachorros',
    autor: 'João',
    avaliacao: 1.5
}];

let usuarioLogado;
let users = {}; // Armazenar os sockets com o id do usuário

App.use(express.json());
App.use(cors()); // Permitir CORS para as rotas HTTP

// Criando o servidor HTTP
const server = http.createServer(App);

// Configuração do CORS para o Socket.IO
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:5173', // Defina a origem do seu front-end (onde está o React rodando)
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true,
    }
});

// Configurando o evento de conexão no Socket.IO
io.on('connection', (socket) => {
    console.log('Novo usuário conectado!');
    
    // Quando um usuário se conecta, ele envia seu ID, e o servidor armazena o socket associado ao ID.
    socket.on('set-id', (userId) => {
        users[userId] = socket.id;  // Armazenando o socket de cada usuário
        console.log(`Usuário ${userId} conectado com o socket ${socket.id}`);
    });

    // Escuta por mensagens e direciona para o ID do destinatário
    socket.on('chat-message', (data) => {
        const { toUserId, message } = data; // Pega o ID do destinatário e a mensagem

        // Verifica se o destinatário está conectado
        if (users[toUserId]) {
            // Envia a mensagem para o destinatário
            io.to(users[toUserId]).emit('chat-message', { fromUserId: socket.id, message });
            console.log(`Mensagem de ${socket.id} para ${toUserId}: ${message}`);
        } else {
            console.log(`Usuário ${toUserId} não está conectado`);
        }
    });

    // Evento de desconexão
    socket.on('disconnect', () => {
        // Remover o usuário desconectado
        for (let userId in users) {
            if (users[userId] === socket.id) {
                delete users[userId];
                console.log(`Usuário ${userId} desconectado`);
                break;
            }
        }
    });
});

// Rota para adicionar uma nova obra ao portfólio
App.post('/postarPortifolio', (req, res) => {
    const { nome, autor, img, avaliacao } = req.body;

    try {
        const Portifolio = {
            id: vetorObras.length + 1,
            img: img,
            nome: nome,
            autor: autor,
            avaliacao: avaliacao,
        };

        vetorObras.push(Portifolio);
        // Emitir uma notificação para todos os clientes conectados
        io.emit('notificacao', 'Nova obra foi adicionada ao portfólio!');

        res.status(201).json({ message: 'Obra adicionada com sucesso!' });
    } catch (err) {
        console.log('O erro foi: ' + err);
        res.status(500).json({ message: 'Erro ao inserir portfólio' });
    }
});

// Rota para obter todas as obras no portfólio
App.get('/', (req, res) => {
    res.json(vetorObras);
});

// Rota para atualizar o usuário logado
App.post('/UsuarioLogado', (req, res) => {
    const resultado = req.body;
    usuarioLogado = resultado;
});

// Rota para obter o usuário logado
App.get("/UsuarioLogado", (req, res) => {
    res.json(usuarioLogado);
});

// Iniciar o servidor na porta 3100
server.listen(3100, () => {
    console.log('Servidor rodando na porta 3100');
});