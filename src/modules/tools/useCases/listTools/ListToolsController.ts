import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListToolsUseCase } from "./ListToolsUseCase";

class ListToolsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listToolsUseCase = container.resolve(ListToolsUseCase);
        const all = await listToolsUseCase.execute();
        return response.status(200).json({ all });
    }
}
export { ListToolsController };
