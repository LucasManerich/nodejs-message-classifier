import { BayesClassifier } from 'natural';

export default class Classifier {

  // instância do singleton
  private static instance: Classifier;

  // classificador NLP
  private classifier: BayesClassifier;
  
  constructor() {
    this.classifier = new BayesClassifier();
  }

  /**
   * Retorna a instância do classificador
   */
  public getClassifier() : BayesClassifier{
    return this.classifier
  }

  /**
   * Retorna a instância da classe Chatbot
   */
  public static getInstance() : Classifier {
    if(Classifier.instance == null) {
      Classifier.instance = new Classifier();
    }
    return Classifier.instance;
  }
}