import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUsers extends Document {
  Name: String;
  Email: String;
  Password: String;
  IsAdmin: Boolean | null;
  Adminid: ObjectId | null;
  Skills: String | null;
  AvatarUrl: String | null;
  IsSuperAdmin: Boolean | null;
  Documents: {
    DownloadUrl: String | null;
    Title: String | null;
    ExpireAt: Date | null;
  }[];
  Online: Boolean | null;
  IsBlocked: Boolean | null;
  LastWorkedOn: any | null;
  PendingTasks: ObjectId[] | null;
  _id: ObjectId;
}

const UsersSchema: Schema = new Schema({
  Name: { type: String },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  IsAdmin: { type: Boolean },
  Adminid: { type: Schema.ObjectId, ref: "Users" },
  Skills: [{ type: String }],
  Documents: [{
    DownloadUrl: { type: String },
    Title: { type: String },
    ExpireAt: { type: Date },
    RemindAt: { type: Date }
  }],
  AvatarUrl: { type: String },
  IsSuperAdmin: { type: Boolean },
  Online: { type: Boolean },
  IsBlocked: { type: Boolean },
  LastWorkedOn: { type: Schema.ObjectId, ref: "Projects" },
  PendingTasks: [{ type: Schema.ObjectId }]
}, { timestamps: true });

const Users = mongoose?.models?.Users || mongoose.model<IUsers>('Users', UsersSchema);

export default Users;

