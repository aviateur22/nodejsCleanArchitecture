import { ToDoRepositorySchema } from "../../../domain/ports/repositoriesSchemas/ToDoRepositorySchema";
import { ToDoModel } from "../../models/ToDoModel";

/**
 * Repository InMemory
 */
class InMemoryToDoRepository implements ToDoRepositorySchema {
  save(toDo: AddTodoSchema): ToDoModel {
    throw new Error("Method not implemented.");
  }
  update(toDo: UpdateTodoSchema): ToDoModel {
    throw new Error("Method not implemented.");
  }
  checkToggleItem(toDo: CheckToggleTodoSchema): ToDoModel {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<Array<ToDoModel>> {
    throw new Error("Method not implemented.");
  }
  getOne(toDo: GetOneTodoSchema): ToDoModel {
    throw new Error("Method not implemented.");
  }
 
}

export { InMemoryToDoRepository }