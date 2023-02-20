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
  readonly findAllToDoUseCase: FindAllToDoUseCase;
  readonly findOneTodoUseCase: FindOneTodoUseCase;

  constructor() {
    this.addTodoUseCase = new AddTodoUseCase(this);
    this.checkTodoUseCase = new CheckTodoUseCase(this);
    this.updateTodoUseCase = new UpdateTodoUseCase(this);
    this.findOneTodoUseCase = new FindOneTodoUseCase(this);
    this.findAllToDoUseCase = new FindAllToDoUseCase(this);
  }

}
export { UseCases }