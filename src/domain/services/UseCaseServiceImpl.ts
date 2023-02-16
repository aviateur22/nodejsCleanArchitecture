import { UseCases } from "../helpers/useCases/UseCases";

/**
 * Implemantation des UseCases
 */
class UseCaseServiceImpl {
  static useCases: UseCases;

  /**
   * Récupération des UsesCases 
   * @returns { UseCases }
   */
  static getUseCases(): UseCases {
    if(!UseCaseServiceImpl.useCases) {
      UseCaseServiceImpl.useCases = new UseCases();
    }

    return UseCaseServiceImpl.useCases;
  }
}

export { UseCaseServiceImpl }