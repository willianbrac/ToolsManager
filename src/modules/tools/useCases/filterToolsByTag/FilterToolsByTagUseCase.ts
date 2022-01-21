import { inject, injectable } from "tsyringe";

import { Tool } from "@modules/tools/infra/typeorm/entities/Tool";
import { IToolsRepository } from "@modules/tools/repositories/IToolsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class FilterToolsByTagUseCase {
    constructor(
        @inject("ToolsRepository")
        private toolsRepository: IToolsRepository
    ) {}

    async execute(tag: string): Promise<Tool[]> {
        const toolsTags = await this.toolsRepository.findByTag(tag);

        if (!toolsTags.length) {
            throw new AppError("Tag does't exist in tool list!");
        }

        return toolsTags;
    }
}

export { FilterToolsByTagUseCase };
