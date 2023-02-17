import { TodoModel } from "../../../infra/models/TodoModel";

/**
 * Schema base de données Item
 */
interface TodoRepositorySchema {

  /**
   * 
   * @param {AddItemSchema} Todo 
   */
  save(Todo: AddTodoSchema): Promise<TodoModel>;

  /**
   * Mise a jour des données d'un item
   * @param {UpdateTodoSchema} Todo 
   */
  update(Todo: UpdateTodoSchema): TodoModel;

  /**
   * Check ou unCheck un item
   * @param {CheckItemSchema} Todo 
   */
  checkToggleItem(Todo: CheckToggleTodoSchema): TodoModel;

  /**
   * Récupération de tous les items
   */
  getAll(): Promise<Array<TodoModel>>

  /**
   * Récuperation de 1 item
   * @param {GetOneTodoSchema} Todo 
   */
  getOne(Todo: GetOneTodoSchema): TodoModel;

  /**
   * Suppression de 1 item
   * @param Todo 
   */
  deleteOne(Todo: DeleteTodoSchema): TodoModel;

  /**
   * Suppression de tous les todos
   */
  deleteAll(): Promise<boolean>



}

export { TodoRepositorySchema }