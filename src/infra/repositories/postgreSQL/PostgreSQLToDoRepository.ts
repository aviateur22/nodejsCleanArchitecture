import { ToDoRepositorySchema } from "../../../domains/ports/repositoriesSchemas/ToDoRepositorySchema";
import { ToDoModel } from "../../models/ToDoModel";

/**
 * Base de données PostgreSQL
 */
class PostgreSQLToDoRepository implements ToDoRepositorySchema {
  save(toDo: AddTodoSchema): ToDoModel {
    throw new Error("Method not implemented.");
  }
  update(toDo: UpdateTodoSchema): ToDoModel {
    throw new Error("Method not implemented.");
  }
  checkToggleItem(toDo: CheckTodoSchema): ToDoModel {
    throw new Error("Method not implemented.");
  }
  getAll(): ToDoModel[] {
    throw new Error("Method not implemented.");
  }
  getOne(toDo: GetOneTodoSchema): ToDoModel {
    throw new Error("Method not implemented.");
  }
  
}
export { PostgreSQLToDoRepository }