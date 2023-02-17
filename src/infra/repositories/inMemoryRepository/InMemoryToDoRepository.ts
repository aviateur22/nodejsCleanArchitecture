import { TodoRepositorySchema } from "../../../domain/ports/repositoriesSchemas/TodoRepositorySchema";
import { TodoModel } from "../../models/TodoModel";

/**
 * Repository InMemory
 */
class InMemoryToDoRepository implements TodoRepositorySchema {
  
  private todos: Array<TodoModel> = [];

  /**
   * Ajout d'un todo
   * @param todo 
   * @returns 
   */
  async save(todo: AddTodoSchema): Promise<TodoModel> {
    // Index
    const index: number = this.todos.length === 0 ? 1 : Math.max(...this.todos.map(x=>x.id)) + 1;

    const todoModel = {
      id: index,
      title: todo.title,
      description: todo.description,
      statut: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    this.todos.push(todoModel);
    return todoModel;
  }
  update(todo: UpdateTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }
  checkToggleItem(todo: CheckToggleTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }

  /**
   * Renvoie les todos
   * @returns {Array<TodoModel>}
   */
  async getAll(): Promise<Array<TodoModel>> {
    return this.todos;
  }
  getOne(todo: GetOneTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }
  deleteOne(Todo: DeleteTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }

  /**
   * Suppression des Todos
   */
  async deleteAll(): Promise<boolean> {
    this.todos = [];
    return true;
  }  
 
}

export { InMemoryToDoRepository }