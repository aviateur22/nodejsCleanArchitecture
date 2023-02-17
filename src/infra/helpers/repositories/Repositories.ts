import { ToDoRepositorySchema } from "../../../domain/ports/repositoriesSchemas/ToDoRepositorySchema"

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