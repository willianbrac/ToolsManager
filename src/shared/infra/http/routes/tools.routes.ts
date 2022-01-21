import { Router } from "express";

import { CreateToolController } from "@modules/tools/useCases/createTool/CreateToolController";
import { DeleteToolController } from "@modules/tools/useCases/deleteTool/DeleteToolController";
import { FilterToolsByTagController } from "@modules/tools/useCases/filterToolsByTag/FilterToolsByTagController";
import { ListToolsController } from "@modules/tools/useCases/listTools/ListToolsController";

const toolsRoutes = Router();
const createToolController = new CreateToolController();
const listToolsController = new ListToolsController();
const deleteToolController = new DeleteToolController();
const filterToolsByTagController = new FilterToolsByTagController();
toolsRoutes.post("/tools", createToolController.handle);
toolsRoutes.get("/tools", listToolsController.handle);
toolsRoutes.delete("/tool/:id", deleteToolController.handle);
toolsRoutes.get("/tools/:tag", filterToolsByTagController.handle);
export { toolsRoutes };
