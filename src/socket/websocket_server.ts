import HttpServer from './http_server';
import SocketIO from 'socket.io';
import { Server } from 'http';
import BotServer from './bot_server';

export default class WebsocketServer extends BotServer {
  
  private io: SocketIO.Server;
  private messageCallback: (message: String, socket: SocketIO.Socket) => void;

  /**
   * Adiciona o HTTP Server ao Socket
   * @param httpServer 
   */
  private appendSocket(httpServer: Server) {
    this.io = SocketIO(httpServer);
  }

  /**
   * Conecta ao socket
   */
  public listen() {
    this.io.on('connection', (socket) => {
      socket.on('message', (message) => {
        this.messageCallback(message, socket);
      });
    });
  }

  /**
   * Inicia o servidor
   */
  public start() : void {
    this.appendSocket(HttpServer.start());
    this.listen();
  }

  /**
   * Define uma função de callback para o recebebimento de mensagens
   * @param func 
   */
  public setCallback(func: (message: String, socket: SocketIO.Socket) => void) {
    this.messageCallback = func; 
  }
}