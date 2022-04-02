import {Router} from "express";
import { CreateMelasController } from './database/controllers/CreateMealsController';
import { CreateUserController } from './database/controllers/CreateUserController';
import { DeleteMealsController } from './database/controllers/DeleteMealsController';
import { GetAllMealsController } from './database/controllers/GetAllMealControllers';
import { GetUserController } from './database/controllers/GetUserController';
import { UpdateMealsController } from './database/controllers/UpdateMealsController';

const routes = Router();

routes.post("/meals", new CreateMelasController().handle)
routes.get("/meals-get/:id", new GetAllMealsController().handle)
routes.delete("/meals-del/:id", new DeleteMealsController().handle)
routes.put("/meals-put/:id", new UpdateMealsController().handle)

routes.post("/user", new CreateUserController().handle)
routes.get("/user-get/:username/:password", new GetUserController().handle)



export {routes};