import { Request, Response } from "express";
import { container } from "tsyringe";

import { FilterToolsByTagUseCase } from "./FilterToolsByTagUseCase";

class FilterToolsByTagController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { tag } = request.params;
        const filterToolsByTagUseCase = container.resolve(
            FilterToolsByTagUseCase
        );
        const tools = await filterToolsByTagUseCase.execute(tag);
        return response.status(200).json({ tools });
    }
}
export { FilterToolsByTagController };
