import { RepositorySources } from "../../../infra/helpers/repositories/RepositorySources";
import { RepositoryServiceImpl } from "../../../infra/services/repository/RepositoryServiceImpl";

/**
 * Selection des repo pour les tests
 */
class SelectRepositories {

  /**
   * Selection repo
   */
  static SelectSource() {
    RepositoryServiceImpl.setRepositories(RepositorySources.inMemory);  
  }  
}

export { SelectRepositories }
