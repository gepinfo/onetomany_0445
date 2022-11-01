
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const subjectsentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   subjectid: Number,
   professorname: String
})

const subjectsentityModel = mongoose.model('subjectsentity', subjectsentitySchema, 'subjectsentity');
export default subjectsentityModel;
