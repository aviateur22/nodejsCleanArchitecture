import { ToDoModel } from "../../../infra/models/ToDoModel";

/**
 * Schema base de données Item
 */
interface ToDoRepositorySchema {

  /**
   * 
   * @param {AddItemSchema} toDo 
   */
  save(toDo: AddTodoSchema): ToDoModel;

  /**
   * Mise a jour des données d'un item
   * @param {UpdateTodoSchema} toDo 
   */
  update(toDo: UpdateTodoSchema): ToDoModel;

  /**
   * Check ou unCheck un item
   * @param {CheckItemSchema} toDo 
   */
  checkToggleItem(toDo: CheckTodoSchema): ToDoModel;

  /**
   * Récupération de tous les items
   */
  getAll(): Array<ToDoModel>

  /**
   * Récuperation de 1 item
   * @param {GetOneTodoSchema} toDo 
   */
  getOne(toDo: GetOneTodoSchema): ToDoModel;

}

export { ToDoRepositorySchema }