import { todoService } from "./todo.service";
import { CreateTodoDTO } from "./dtos/create-todo.dto";
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: todoService);
    create(dto: CreateTodoDTO): Promise<import("./todo.entity").todo>;
    findMany(): Promise<import("./todo.entity").todo[]>;
    update(id: number, dto: CreateTodoDTO): Promise<import("./todo.entity").todo>;
    delete(id: number): Promise<import("./todo.entity").todo>;
}
