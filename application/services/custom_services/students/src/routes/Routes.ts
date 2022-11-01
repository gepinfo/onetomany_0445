import { Request, Response, NextFunction } from "express";
import { studentsentityController } from '../controller/studentsentityController';


export class Routes {
    private studentsentity: studentsentityController = new studentsentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/studentsentity').get(this.studentsentity.GpGetAllValues);
app.route('/studentsentity').post(this.studentsentity.GpCreate);
app.route('/studentsentity/get/searchrelationship').get(this.studentsentity.GpSearchRelationship);
     }

}