import { AddTodoUseCase } from "../../useCases/AddToDoUseCase"
import { CheckTodoUseCase } from "../../useCases/CheckTodoUseCase";
import { FindAllToDoUseCase } from "../../useCases/FindAllToDoUseCase";
import { FindOneTodoUseCase } from "../../useCases/FindOneTodoUseCase";
import { UpdateTodoUseCase } from "../../useCases/UpdateTodoUseCase";

/**
 * UseCases disponibles dans le domaine
 */
class UseCases {

  readonly addTodoUseCase: AddTodoUseCase;
  readonly checkTodoUseCase: CheckTodoUseCase;
  readonly updateTodoUseCase: UpdateTodoUseCase;
  readonly getAllTodoUseCase: FindAllToDoUseCase;
  readonly getOneTodoUseCase: FindOneTodoUseCase;

  constructor() {
    this.addTodoUseCase = new AddTodoUseCase(this);
    this.checkTodoUseCase = new CheckTodoUseCase(this);
    this.updateTodoUseCase = new UpdateTodoUseCase(this);
    this.getOneTodoUseCase = new FindOneTodoUseCase(this);
    this.getAllTodoUseCase = new FindAllToDoUseCase(this);
  }

}
export { UseCases }