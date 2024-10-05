import { Repository } from "typeorm";
import { todo } from "./todo.entity";
import { CreateTodoDTO } from "./dtos/create-todo.dto";
export declare class todoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<todo>);
    create(dto: CreateTodoDTO): Promise<todo>;
    findMany(): Promise<todo[]>;
    update(id: number, dto: CreateTodoDTO): Promise<todo>;
    delete(id: number): Promise<todo>;
}
