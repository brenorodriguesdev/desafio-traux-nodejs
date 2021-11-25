export interface DeleteByIdCategoryUseCase {
    delete: (id: number) => Promise<void | Error>
}