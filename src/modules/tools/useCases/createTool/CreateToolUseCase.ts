import { inject, injectable } from "tsyringe";

import { Tool } from "@modules/tools/infra/typeorm/entities/Tool";
import { IToolsRepository } from "@modules/tools/repositories/IToolsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    tags: string[];
    title: string;
    link: string;
    description: string;
}

@injectable()
class CreateToolUseCase {
    constructor(
        @inject("ToolsRepository")
        private toolRepository: IToolsRepository
    ) {}
    async execute({ tags, title, link, description }: IRequest): Promise<Tool> {
        const titleAlreadExists = await this.toolRepository.findByTitle(title);
        if (titleAlreadExists) throw new AppError("Tool title alread exists");
        const tool = await this.toolRepository.create({
            tags,
            title,
            link,
            description,
        });
        return tool;
    }
}
export { CreateToolUseCase };
