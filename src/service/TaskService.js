import Task from "../models/Task.js";

class TaskService {
    async create (task,createdBy){
        if(!task){
            throw  new Error("Task is null");
        }
        if(!createdBy){
            throw new Error("Cannot found userId");
        }
        const newTask = await new Task({...task,createdBy});
        await newTask.save();
        return newTask;
    }
    async getAll (createdBy){
        if(!createdBy){
            throw new Error("Cannot found userId");
        }
        const tasks = await Task.find({createdBy});
        return tasks;
    }
    async getOne (id){
        if(!id){
            throw  new Error("id null or undefined");
        }
        const task = await Task.findById(id);
        return task;
    }
    async updateOne (task){
        if(!task){
            throw  new Error("Task null or undefined");
        }
        const updateTask = await Task.findByIdAndUpdate(task._id,task,{new:true});
        return updateTask;
    }
    async delete (id){
        if(!id){
            throw  new Error("id null or undefined");
        }
        const deletedTask = await Task.findByIdAndDelete(id);
        return deletedTask;
    }
}

export default new TaskService();