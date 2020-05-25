import Classifier from "./classifier";

class Chat {

  /**
   * Recebe uma informação do usuário
   * @param message 
   * @param socket 
   */
  public async receive(message: String, socket: SocketIO.Socket) {
    const intent = await Classifier.getInstance().getClassifier().classify(message.toString());
    console.log(intent);
  }
}

export default new Chat();