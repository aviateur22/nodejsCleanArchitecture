import { AddToDoUseCase } from "../../useCases/AddToDoUseCase"
import { CheckToDoUseCase } from "../../useCases/CheckToDoUseCase";
import { GetAllToDoUseCase } from "../../useCases/GetAllToDoUseCase";
import { GetOneToDoUseCase } from "../../useCases/GetOneToDoUseCase";
import { UpdateToDoUseCase } from "../../useCases/UpdateToDoUseCase";

/**
 * UseCases de disponible dans le domaine
 */
class UseCases {

  protected readonly addToDoUseCase: AddToDoUseCase;
  protected readonly checkToDoUseCase: CheckToDoUseCase;
  protected readonly updateToDoUseCase: UpdateToDoUseCase;
  protected readonly getAllToDoUseCase: GetAllToDoUseCase;
  protected readonly getOneToDoUseCase: GetOneToDoUseCase;

  constructor() {
    this.addToDoUseCase = new AddToDoUseCase();
    this.checkToDoUseCase = new CheckToDoUseCase();
    this.updateToDoUseCase = new UpdateToDoUseCase();
    this.getOneToDoUseCase = new GetOneToDoUseCase();
    this.getAllToDoUseCase = new GetAllToDoUseCase();
  }

}
export { UseCases }