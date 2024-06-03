// Importa o módulo 'express', que é um framework para construir aplicações web em Node.js
const express = require('express');

// Cria uma instância do Express, que será nossa aplicação web
const app = express();

// Define a porta em que o servidor vai ouvir (3000)
const port = 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Define uma rota GET para o caminho raiz ('/')
app.get('/', (req, res) => {
  // Envia o arquivo 'index.html' localizado na pasta 'public' como resposta
  res.sendFile(__dirname + '/public/index.html');
});

// Define uma rota GET para o caminho '/contact'
app.get('/contact', (req, res) => {
  // Envia o arquivo 'contact.html' localizado na pasta 'public' como resposta
  res.sendFile(__dirname + '/public/contact.html');
});

// Faz o servidor começar a ouvir na porta definida
app.listen(port, () => {
  // Imprime uma mensagem no console informando que o servidor foi iniciado com sucesso
  console.log(`Servidor rodando em http://localhost:${port}`);
});
