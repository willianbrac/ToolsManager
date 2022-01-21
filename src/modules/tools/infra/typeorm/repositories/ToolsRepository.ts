import { getRepository, Repository } from "typeorm";

import { ICreateToolDTO } from "@modules/tools/dtos/ICreateToolDTO";
import { IToolsRepository } from "@modules/tools/repositories/IToolsRepository";

import { Tool } from "../entities/Tool";

class ToolsRepository implements IToolsRepository {
    private repository: Repository<Tool>;
    constructor() {
        this.repository = getRepository(Tool);
    }

    async create({
        tags,
        title,
        link,
        description,
    }: ICreateToolDTO): Promise<Tool> {
        const tool = this.repository.create({
            tags,
            title,
            link,
            description,
        });
        await this.repository.save(tool);
        return tool;
    }

    async list(): Promise<Tool[]> {
        const tools = await this.repository.find();
        return tools;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findById(id: string): Promise<Tool> {
        const tool = await this.repository.findOne(id);
        return tool;
    }

    async findByTag(tag: string): Promise<Tool[]> {
        const query = await this.repository
            .createQueryBuilder("tool")
            .where(":tag = ANY (string_to_array(tool.tags, ','))", { tag });
        const tools = await query.getMany();
        return tools;
    }

    async findByTitle(title: string): Promise<Tool> {
        const tool = await this.repository.findOne({ title });
        return tool;
    }
}
export { ToolsRepository };
