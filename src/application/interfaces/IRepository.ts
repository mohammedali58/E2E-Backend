export default abstract class IRepository<T> {
  abstract create(item: T): Promise<T>;
  abstract getAll(): Promise<T[]>;
  abstract update(updatedItem: T): Promise<T>;
  abstract delete(id: number): Promise<number>;
}
