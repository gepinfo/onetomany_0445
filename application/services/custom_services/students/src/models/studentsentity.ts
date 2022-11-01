
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const studentsentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   age: Number,
   subjectsid: [{ type: Schema.Types.Number, ref: 'subjectsentity' }],
   studentid: Number
})

const studentsentityModel = mongoose.model('studentsentity', studentsentitySchema, 'studentsentity');
export default studentsentityModel;
