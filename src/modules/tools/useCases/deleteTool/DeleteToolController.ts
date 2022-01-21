import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteToolUseCase } from "./DeleteToolUseCase";

class DeleteToolController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteToolUseCase = container.resolve(DeleteToolUseCase);
        await deleteToolUseCase.execute(id);
        return response.status(200).json({ message: "Deleted!" });
    }
}
export { DeleteToolController };
