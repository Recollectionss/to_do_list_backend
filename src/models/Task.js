import mongoose, {Mongoose} from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
    },
    difficulty:{
        type:Number,
        default:0,
        maximum:3,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
});


const Task = mongoose.model("Task",taskSchema);
export default Task;