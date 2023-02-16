/**
 * Model Item isuue de la base de données 
 */
class ToDoModel {

  public readonly id: number;
  public readonly title: string;
  public readonly description: string;
  public readonly statut: boolean;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    id: number, 
    title: string, 
    description: string, 
    statut: boolean,
    createdAt: Date,
    updatedAt: Date
    ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.statut = statut;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }
  
}

export { ToDoModel }