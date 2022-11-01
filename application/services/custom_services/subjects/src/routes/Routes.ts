import { Request, Response, NextFunction } from "express";
import { subjectsentityController } from '../controller/subjectsentityController';


export class Routes {
    private subjectsentity: subjectsentityController = new subjectsentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/subjectsentity/get/search').get(this.subjectsentity.GpSearch);
app.route('/subjectsentity').post(this.subjectsentity.GpCreate);
     }

}