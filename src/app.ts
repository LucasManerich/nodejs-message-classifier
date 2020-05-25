import env from 'dotenv';
import WebsocketServer from './socket/websocket_server';
import api from './repository/api';
import Train from './bot/train';
import Chat from './bot/chat';

// configura as variaveis de ambiente
env.config();

// inicia o websocket
const ws = new WebsocketServer();

// seta o callback de recebimento de dados
ws.setCallback(Chat.receive);

// realiza o treinamento 
(async() => {
  console.log('Iniciando treinamento...');
  await Train.train(api.getDocuments());
  console.log('Treinamento concluído.');
  // inicia o socket
  ws.start();
})();