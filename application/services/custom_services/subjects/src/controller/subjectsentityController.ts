import { Request, Response } from 'express';
import { subjectsentityService } from '../service/subjectsentityService';
import { CustomLogger } from '../config/Logger'
let subjectsentity = new subjectsentityService();

export class subjectsentityController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
subjectsentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subjectsentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subjectsentityController.ts: GpSearch');
    })}
public GpCreate(req: Request, res: Response) {
subjectsentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into subjectsentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from subjectsentityController.ts: GpCreate');
    })}


}