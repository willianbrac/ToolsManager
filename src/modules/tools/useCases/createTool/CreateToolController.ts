import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateToolUseCase } from "./CreateToolUseCase";

class CreateToolController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { tags, title, link, description } = request.body;
        const createToolUseCase = container.resolve(CreateToolUseCase);
        const tool = await createToolUseCase.execute({
            tags,
            title,
            link,
            description,
        });
        return response.status(201).json(tool);
    }
}
export { CreateToolController };
