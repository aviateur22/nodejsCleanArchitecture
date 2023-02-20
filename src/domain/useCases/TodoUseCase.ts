import { RepositoryServiceImpl } from "../../infra/services/repository/RepositoryServiceImpl";

/**
 * UseCaseModel  ayant l'acces au repositories
 */
class TodoUseCase {
  protected repositories = RepositoryServiceImpl.getRepositories().todoRepository;
}

export { TodoUseCase }