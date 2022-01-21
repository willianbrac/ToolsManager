import { inject, injectable } from "tsyringe";

import { IToolsRepository } from "@modules/tools/repositories/IToolsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteToolUseCase {
    constructor(
        @inject("ToolsRepository")
        private toolsRepository: IToolsRepository
    ) {}

    async execute(id: string): Promise<void> {
        const tool = await this.toolsRepository.findById(id);

        if (!tool) {
            throw new AppError("Tool does't exists!");
        }
        await this.toolsRepository.delete(id);
    }
}

export { DeleteToolUseCase };
