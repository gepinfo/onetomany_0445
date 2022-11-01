import * as mongoose from 'mongoose';
import subjectsentityModel from '../models/subjectsentity';
import { CustomLogger } from '../config/Logger'


export class subjectsentityDao {
    private subjectsentity = subjectsentityModel;
    constructor() { }
    
    public async GpSearch(subjectsentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into subjectsentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(subjectsentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.subjectsentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from subjectsentityDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
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