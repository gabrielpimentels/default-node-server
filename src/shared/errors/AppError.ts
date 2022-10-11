export class AppError {
  public readonly title: string;

  public readonly description: string | undefined = undefined;

  public readonly statusCode: number;

  constructor(title: string, description?: string, statusCode = 400) {
    this.title = title;
    this.description = description;
    this.statusCode = statusCode;
  }
}
