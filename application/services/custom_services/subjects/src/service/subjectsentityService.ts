import { Request, Response } from 'express';
import {subjectsentityDao} from '../dao/subjectsentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let subjectsentity = new subjectsentityDao();

export class subjectsentityService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into subjectsentityService.ts: GpCreate')
     let  subjectsentityData = req.body;
     subjectsentity.GpCreate(subjectsentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from subjectsentityService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}