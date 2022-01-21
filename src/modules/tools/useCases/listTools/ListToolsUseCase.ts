import { inject, injectable } from "tsyringe";

import { Tool } from "@modules/tools/infra/typeorm/entities/Tool";
import { IToolsRepository } from "@modules/tools/repositories/IToolsRepository";

@injectable()
class ListToolsUseCase {
    constructor(
        @inject("ToolsRepository")
        private toolsRepository: IToolsRepository
    ) {}

    async execute(): Promise<Tool[]> {
        const tools = await this.toolsRepository.list();
        return tools;
    }
}

export { ListToolsUseCase };
