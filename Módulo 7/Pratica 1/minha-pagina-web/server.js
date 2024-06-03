// Importa o módulo 'http' do Node.js para criar um servidor HTTP
const http = require('http');

// Define o hostname (nome do host) como 'localhost', que geralmente é o endereço padrão para desenvolvimento local
const hostname = 'localhost';

// Define a porta em que o servidor vai ouvir (3000)
const port = 3000;

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  // Define o status da resposta HTTP como 200 (OK)
  res.statusCode = 200;

  // Define o cabeçalho 'Content-Type' da resposta HTTP para 'text/html'
  res.setHeader('Content-Type', 'text/html');

  // Envia a resposta HTTP com um conteúdo HTML simples
  res.end(`<html><body><h1>Hello, World!</h1></body></html>`);
});

// Faz o servidor escutar as requisições na porta e hostname definidos
server.listen(port, hostname, () => {
  // Imprime uma mensagem no console informando que o servidor foi iniciado com sucesso
  console.log(`Servidor iniciado em http://${hostname}:${port}`);
});
