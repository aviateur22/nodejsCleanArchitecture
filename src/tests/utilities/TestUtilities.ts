import { TodoEntity } from "../../domain/entities/todo/TodoEntity";
import { TodoRepositorySchema } from "../../domain/ports/repositoriesSchemas/TodoRepositorySchema";
import { UseCaseServiceImpl } from "../../domain/services/UseCaseServiceImpl";
import { RepositoryServiceImpl } from "../../infra/services/repository/RepositoryServiceImpl";
import { ServerServiceImpl } from "../../infra/services/server/ServerServiceImpl";
import { SelectServices } from "./SelectServices";

export class TestUtilities {
  
  /**
   * Todos a ajouter
   */  
  private todos: Array<AddTodoSchema> = [
    {
      title: 'Title 1',
      description: 'Description 1',
      status: false
    },
    {     
      title: 'Title 2',
      description: 'Description 2',
      status: false
    }
  ]
  
  /**
   * Initilise les services pour les tests
   */
  selectService(): void {
    // Selection Backend
    SelectServices.SelectBackend();
    console.log('fin reset');
    
    // Selection logger
    SelectServices.selectLoggerSource();

    // Repositories
    SelectServices.SelectRepositoriesSource();
   
  }

  /**
   * Reset des parametres entre chaque service
   */
  async resetParam() {
    // Clear tous les todos
    await this.clearAllTodos();

    // Add 2 todos
    await this.createTodos();
  }  

  /**
   * Récupération du server
   * @returns {any}
   */
  getBackend(): any {
    return ServerServiceImpl.getServer()
  }

  /**
   * Récupération du repository
   * @returns { TodoRepositorySchema }
   */
  private getRepository(): TodoRepositorySchema {  
    return RepositoryServiceImpl.getRepository().todoRepository;
  }

  /**
   * Création de Todos
   */
  async createTodos(): Promise<void> {

    for(const todo of this.todos) {
      const addTodo = await UseCaseServiceImpl.getUseCases().addTodoUseCase.execute(todo);
    }
  }

  /**
   * Suppresion de tous les todos
   */
  async clearAllTodos(): Promise<void> {
    await this.getRepository().deleteAll();
  }

  /**
   * Renvoi les Todo
   */
  async findAllTodos(): Promise<Array<TodoEntity>> {
    const findAllTodos =  await UseCaseServiceImpl.getUseCases().findAllToDoUseCase.execute();
    return findAllTodos;
  }
}