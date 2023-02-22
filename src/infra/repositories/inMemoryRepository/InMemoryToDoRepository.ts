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
   * @param {AddTodoSchema} todoSchema 
   * @returns {TodoModel}
   */
  async save(todoSchema: AddTodoSchema): Promise<TodoModel> {
    // Index
    const index: number = this.todos.length === 0 ? 1 : Math.max(...this.todos.map(x=>Number(x.id))) + 1;

    const todoModel = new TodoModel(
      index.toString(),
      todoSchema.title,
      todoSchema.description,
      todoSchema.status,
      new Date(),
      new Date()
    )

    this.todos.push(todoModel);
    return todoModel;
  }

  /**
   * Mise a jour d'une Todo
   * @param {UpdateTodoSchema} todoSchema 
   * @returns {TodoModel}
   */
  async updateOne(todoSchema: UpdateTodoSchema): Promise<TodoModel> {   

    // Index
    const index: number = Number(todoSchema.id);

    // Modification des propriété
    this.todos[index - 1].title = todoSchema.title;
    this.todos[index - 1].description = todoSchema.description;  
    this.todos[index - 1].updatedAt = new Date();

    const updateTodo = await this.findOne(todoSchema);

    if(!updateTodo) {
      throw new TodoNotFindException();
    }
    
    return updateTodo;

  }

  /**
   * 
   * @param todoSchema 
   * @returns 
   */
  async checkToggleItem(todoSchema: CheckToggleTodoSchema): Promise<TodoModel> {
    // Index
    const index: number = Number(todoSchema.id);

    // Modification des propriété
    this.todos[index - 1].status = todoSchema.status;
    this.todos[index - 1].updatedAt = new Date();
    
    return this.todos[index - 1];
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
   * @param {GetOneTodoSchema} todoSchema 
   * @returns {TodoModel|null}
   */
  async findOne(todoSchema: FindOneTodoSchema): Promise<TodoModel|null> {
    const findTodo = await this.todos.find(todo => (todoSchema.id === todo.id));
    return findTodo !== undefined ? findTodo : null;
  }

  /**
   * Suppression d'une todo
   * @param {DeleteTodoSchema} TodoSchema 
   */
  async deleteOne(TodoSchema: DeleteTodoSchema): Promise<boolean> {
    
    // Recherche de l'index
    const todoIndex: number = this.todos.findIndex(todo=> todo.id === TodoSchema.id);

    if(todoIndex < 0) {
      throw new TodoNotFindException();
    }

    // Suppression de la todo
    this.todos.splice(todoIndex, 1);

    return true;
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