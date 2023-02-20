import { TodoRepositorySchema } from "../../../domain/ports/repositoriesSchemas/TodoRepositorySchema";
import { TodoNotFindException } from "../../../exceptions/TodoNotFindException";

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
    const index: number = this.todos.length === 0 ? 1 : Math.max(...this.todos.map(x=>Number(x.id))) + 1;

    const todoModel = new TodoModel(
      index.toString(),
      todo.title,
      todo.description,
      true,
      new Date(),
      new Date()
    )

    this.todos.push(todoModel);
    return todoModel;
  }

  /**
   * Mise a jour d'une Todo
   * @param {UpdateTodoSchema} todo 
   * @returns {TodoModel}
   */
  async updateOne(todo: UpdateTodoSchema): Promise<TodoModel> {   

    // Index
    const index: number = Number(todo.id);

    // Modification des propriété
    this.todos[index - 1].title = todo.title;
    this.todos[index - 1].description = todo.description;
    this.todos[index - 1].status = todo.status;
    this.todos[index - 1].updatedAt = new Date();
    
    return this.todos[index - 1];

  }

  checkToggleItem(todo: CheckToggleTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }

  /**
   * Renvoie les todos
   * @returns {Array<TodoModel>}
   */
  async findAll(): Promise<Array<TodoModel>> {
    return this.todos;
  }

  /**
   * Recherche d'une todo
   * @param {GetOneTodoSchema} todo 
   * @returns {TodoModel|null}
   */
  async findOne(todo: GetOneTodoSchema): Promise<TodoModel|null> {
    const findTodo = await this.todos.find(todo => (todo.id === todo.id));
    return findTodo !== undefined ? findTodo : null;
  }

  /**
   * Suppression d'une todo
   * @param {DeleteTodoSchema} Todo 
   */
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