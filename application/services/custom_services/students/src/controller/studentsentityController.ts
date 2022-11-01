import { Request, Response } from 'express';
import { studentsentityService } from '../service/studentsentityService';
import { CustomLogger } from '../config/Logger'
let studentsentity = new studentsentityService();

export class studentsentityController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
studentsentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
studentsentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsentityController.ts: GpCreate');
    })}
public GpSearchRelationship(req: Request, res: Response) {
studentsentity.GpSearchRelationship(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsentityController.ts: GpSearchRelationship');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsentityController.ts: GpSearchRelationship');
    })}


}