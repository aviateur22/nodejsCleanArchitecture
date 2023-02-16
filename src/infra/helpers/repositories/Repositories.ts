import { ToDoRepositorySchema } from "../../../domains/ports/repositoriesSchemas/ToDoRepositorySchema"

/**
 * Regroupement des repositories
 */
class Repositories {
  public readonly itemRepository: ToDoRepositorySchema;

  constructor(itemRepository: ToDoRepositorySchema) {
    this.itemRepository = itemRepository;
  }
}
export { Repositories }