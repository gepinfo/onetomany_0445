import * as mongoose from 'mongoose';
import studentsentityModel from '../models/studentsentity';
import { CustomLogger } from '../config/Logger'


export class studentsentityDao {
    private studentsentity = studentsentityModel;
    constructor() { }
    
    public async GpSearch(studentsentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(studentsentityData).forEach(
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
    this.studentsentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentsentityDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsentityDao.ts: GpGetAllValues');

    

    
    
    
    this.studentsentity.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentsentityDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(studentsentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsentityDao.ts: GpCreate');

    let temp = new studentsentityModel(studentsentityData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentsentityDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchRelationship(studentsentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsentityDao.ts: GpSearchRelationship');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(studentsentityData).forEach(
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
    this.studentsentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentsentityDao.ts: GpSearchRelationship');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}