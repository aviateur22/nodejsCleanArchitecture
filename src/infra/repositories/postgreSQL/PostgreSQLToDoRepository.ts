import { TodoRepositorySchema } from "../../../domain/ports/repositoriesSchemas/TodoRepositorySchema";
import { TodoModel } from "../../models/TodoModel";

/**
 * Base de données PostgreSQL
 */
class PostgreSQLToDoRepository implements TodoRepositorySchema {
  
  save(toDo: AddTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }
  update(toDo: UpdateTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }
  checkToggleItem(toDo: CheckToggleTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<Array<TodoModel>> {
    throw new Error("Method not implemented.");
  }
  getOne(toDo: GetOneTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }
  deleteOne(Todo: DeleteTodoSchema): TodoModel {
    throw new Error("Method not implemented.");
  }
  deleteAll(): boolean {
    throw new Error("Method not implemented.");
  }
  
}
export { PostgreSQLToDoRepository }