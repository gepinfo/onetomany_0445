import * as mongoose from 'mongoose';
import subjectsentityModel from '../models/subjectsentity';
import { CustomLogger } from '../config/Logger'


export class subjectsentityDao {
    private subjectsentity = subjectsentityModel;
    constructor() { }
    
    public async GpCreate(subjectsentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subjectsentityDao.ts: GpCreate');

    let temp = new subjectsentityModel(subjectsentityData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from subjectsentityDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}