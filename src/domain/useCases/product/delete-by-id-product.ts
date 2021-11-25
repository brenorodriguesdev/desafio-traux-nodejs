export interface DeleteByIdProductUseCase {
    delete: (id: number) => Promise<void | Error>
}