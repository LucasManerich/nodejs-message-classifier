import ClassifierDocument from "../bot/interfaces/classifier_document";

class Api {

  /**
   * Retorna a lista de possíveis intenções do usuário
   * @todo retornar da API
   */
  public getDocuments() : Array<ClassifierDocument>{
    return [
      {
        id: 0,
        message: 'ola'
      },
      {
        id: 0,
        message: 'ola bom dia'
      },
      {
        id: 0,
        message: 'ola tudo bem'
      },
      {
        id: 0,
        message: 'ola tudo certo'
      },
      {
        id: 1,
        message: 'qual seu nome'
      },
      {
        id: 1,
        message: 'como você se chama'
      }
    ];
  }
}

export default new Api();