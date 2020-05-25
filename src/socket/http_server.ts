import express from 'express';
import { Server } from 'http';
import BotServer from './bot_server';

class HttpServer extends BotServer {
  
  private server: Server;

  /**
   * Retorna a porta de conexão do servidor
   */
  private getServerPort() : Number {
    return Number(process.env.SERVER_PORT) || 3333;
  }

  /**
   * Cria o servidor
   */
  private createServer() {
    const app = express();
    this.server = new Server(app);
  }

  /**
   * Abre o servidor na porta determinada no config
   */
  public listen() {
    if(this.server) {
      const port = this.getServerPort();
      this.server.listen(port, () => {
        console.log(`Servidor iniciado na porta ${port}`);
      });
    }
  }

  /**
   * Inicia o servidor
   */
  public start() : Server {
    this.createServer();
    this.listen(); 
    return this.server;
  }
}

export default new HttpServer();