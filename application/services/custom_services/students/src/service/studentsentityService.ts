import { Request, Response } from 'express';
import {studentsentityDao} from '../dao/studentsentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let studentsentity = new studentsentityDao();

export class studentsentityService {
    
    constructor() { }
    
    public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsentityService.ts: GpSearch')
     let  studentsentityData = req.query;
     studentsentity.GpSearch(studentsentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsentityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsentityService.ts: GpGetAllValues')
     
     studentsentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsentityService.ts: GpCreate')
     let  studentsentityData = req.body;
     studentsentity.GpCreate(studentsentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsentityService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsentityService.ts: GpSearchRelationship')
     let  studentsentityData = req.query;
     studentsentity.GpSearchRelationship(studentsentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsentityService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
    
    
    
}