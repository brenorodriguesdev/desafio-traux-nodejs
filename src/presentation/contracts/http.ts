export interface HttpRequest {
    body?: any
    params?: any
    query?: any
    file?: Express.Multer.File
}

export interface HttpResponse {
    statusCode: number
    data?: any
}