import { Router, Request, Response } from 'express'; // Updated import to include Request and Response

class IndexController {
    getIndex(req: Request, res: Response) { // Added types here
        res.send('Welcome to the Express App!');
    }
}

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: any) {
    app.use('/', router);
    router.get('/', indexController.getIndex.bind(indexController));
}