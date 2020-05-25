export default abstract class BotServer {

  /**
   * Inicia o sevidor
   */
  public abstract listen() : void;

  /**
   * Constrói o servidor
   */
  public abstract start() : void;
}