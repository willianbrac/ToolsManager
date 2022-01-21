import { ICreateToolDTO } from "../dtos/ICreateToolDTO";
import { Tool } from "../infra/typeorm/entities/Tool";

interface IToolsRepository {
    create(data: ICreateToolDTO): Promise<Tool>;
    list(): Promise<Tool[]>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Tool>;
    findByTag(tag: string): Promise<Tool[]>;
    findByTitle(title: string): Promise<Tool>;
}
export { IToolsRepository };
