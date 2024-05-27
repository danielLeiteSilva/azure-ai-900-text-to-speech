import { Router } from 'express'
import MicrosoftController from './Controllers/MicrosoftController';
import HelhController from './Controllers/HelthController';

//Configs
const router: Router = Router();

//Routes
router.get('/api/v1', HelhController.execute);
router.post("/api/v1/speechToText", MicrosoftController.execute);

export default router;