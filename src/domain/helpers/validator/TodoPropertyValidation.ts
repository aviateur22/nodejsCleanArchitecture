import { InvalidTodoDescriptionException } from "../../../exceptions/InvalidTodoDescriptionException";
import { InvalidTodoIdentityException } from "../../../exceptions/InvalidTodoIdentityException";
import { InvalidTodoTitleException } from "../../../exceptions/InvalidTodoTitleException";

class TodoPropertyValidation<T> {

  protected todo: T;

  constructor(todo: T) {
    this.todo = todo;
    this.propertiesValidation();
  }

  /**
   * Validation des propriétés d'une todo
   */
  protected propertiesValidation() {
    let key: keyof typeof this.todo;

    
    for(key in this.todo) {

      switch(key) {
        // Identité
        case 'id':
          this.identityPropertyValidation(this.todo[key] as string);
        break;

        // Titre
        case 'title':          
          this.titlePropertyValidation(this.todo[key] as string);          
        break;

        // Description
        case 'description':
          this.descriptionPropertyValidation(this.todo[key] as string);
        break;
      }
     
    }
  }

  /**
   * Validation du l'identité
   * @param {string} id 
   */
  identityPropertyValidation(id: string): void {
    if(id.trim().length < 1 ) {
      throw new InvalidTodoIdentityException();
    }
  }

  /**
   * Validation du titre
   * @param {string} title 
   */
  titlePropertyValidation(title: string): void {
    if(title.trim().length < 3 ) {
      throw new InvalidTodoTitleException();
    }
  }

  /**
   * Validation de le descrtion
   * @param {string} description 
   */
  descriptionPropertyValidation(description: string): void {
    if(description.trim().length < 0 ) {
      throw new InvalidTodoDescriptionException();
    }
  }
}

export { TodoPropertyValidation }