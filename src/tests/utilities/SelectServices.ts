import { TodoRepositorySchema } from "../../domain/ports/repositoriesSchemas/TodoRepositorySchema";
import { LoggerSource } from "../../infra/helpers/logger/LoggerSource";
import { Repositories } from "../../infra/helpers/repositories/Repositories";
import { RepositorySources } from "../../infra/helpers/repositories/RepositorySources";
import { ServerSource } from "../../infra/helpers/server/ServerSource";
import { LoggerServiceImpl } from "../../infra/services/logger/LoggerServiceImpl";
import { RepositoryServiceImpl } from "../../infra/services/repository/RepositoryServiceImpl";
import { ServerServiceImpl } from "../../infra/services/server/ServerServiceImpl";

/**
 * Selection des repo pour les tests
 */
class SelectServices {
  
  /**
   * Selection server
   */
  static SelectBackend(): void {
    ServerServiceImpl.setServer(ServerSource.express);
  }
  
    
  /**
   * Selection repo
   */
  static SelectRepositoriesSource(): void {
    RepositoryServiceImpl.setRepositories(RepositorySources.inMemory);  
  }

  /**
   * Selection Logger
   */
  static selectLoggerSource(): void {
    LoggerServiceImpl.setLogger(LoggerSource.bunyan);
  }
}

export { SelectServices }
