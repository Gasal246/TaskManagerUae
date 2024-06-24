import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IDepartments extends Document {
  _id: ObjectId;
  DepartmentName: String;
  DepartmentHead: ObjectId | null;
  Staffs: ObjectId[] | null;
  regions: {
     Country: String | null;
     Head: ObjectId | null;
     Region: String | null;
  }[];
}

const DepartmentsSchema: Schema = new Schema({
  DepartmentName: { type: String, required: true },
  DepartmentHead: { type: Schema.Types.ObjectId },
  Staffs: [{ type: Schema.Types.ObjectId,  }],
  Regions: [{
     Country: { type: String },
     Head: { type: Schema.Types.ObjectId },
     Region: { type: String },
  }],
});

const Departments = mongoose.model<IDepartments>('Departments', DepartmentsSchema);

export default Departments;

