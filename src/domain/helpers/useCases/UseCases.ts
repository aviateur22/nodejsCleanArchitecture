import { AddTodoUseCase } from "../../useCases/AddTodoUseCase"
import { CheckTodoUseCase } from "../../useCases/CheckTodoUseCase";
import { GetAllTodoUseCase } from "../../useCases/GetAllTodoUseCase";
import { GetOneTodoUseCase } from "../../useCases/GetOneTodoUseCase";
import { UpdateTodoUseCase } from "../../useCases/UpdateTodoUseCase";

/**
 * UseCases disponibles dans le domaine
 */
class UseCases {

  readonly addTodoUseCase: AddTodoUseCase;
  readonly checkTodoUseCase: CheckTodoUseCase;
  readonly updateTodoUseCase: UpdateTodoUseCase;
  readonly getAllTodoUseCase: GetAllTodoUseCase;
  readonly getOneTodoUseCase: GetOneTodoUseCase;

  constructor() {
    this.addTodoUseCase = new AddTodoUseCase();
    this.checkTodoUseCase = new CheckTodoUseCase();
    this.updateTodoUseCase = new UpdateTodoUseCase();
    this.getOneTodoUseCase = new GetOneTodoUseCase();
    this.getAllTodoUseCase = new GetAllTodoUseCase();
  }

}
export { UseCases }