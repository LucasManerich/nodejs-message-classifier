import Classifier from "./classifier";
import ClassifierDocument from "./interfaces/classifier_document";

class Train {
  
  /**
   * Realiza o treinamento do classificador
   * @param documents 
   */
  public async train(documents: Array<ClassifierDocument>) {
    documents.forEach(document => {
      Classifier.getInstance().getClassifier().addDocument(document.message, document.id.toString());
    });
    await Classifier.getInstance().getClassifier().train();
  }
}

export default new Train();