import { RepositoryServiceImpl } from "../../../infra/services/repository/RepositoryServiceImpl";

/**
 * Gestion des todos pour les tests unitaire
 */
class TodoGenerator {

  /**
   * Repositories
   */
  private static readonly repositories = RepositoryServiceImpl.getRepositories().todoRepository;

  /**
   * Todos a ajouter
   */
  private static todos: Array<AddTodoSchema> = [
    {
      title: 'Title 1',
      description: 'Description 1'
    },
    {     
      title: 'Title 2',
      description: 'Description 2'
    }
  ]



  /**
   * 
   */
  static async CreateTodos() {

    TodoGenerator.todos.forEach(async todo => {
      await TodoGenerator.repositories.save(todo);
    });
  }

  /**
   * Suppresion de tous les todos
   */
  static ClearAllTodos() {
    TodoGenerator.repositories.deleteAll();
  }

}
export { TodoGenerator }