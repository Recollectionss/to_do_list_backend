import Task from "../models/Task.js";

class TaskController {
    async create (req,res){
        const {title,body,difficulty} = req.body;
        const {userId} = req.user;
        console.log(userId);
        const task = await new Task({title,body,difficulty,createdBy:userId});
        await task.save();
        res.status(200).json({task});
    }
    async getAll (req,res){
        // 66d47f40af47068638113404
        const {userId} = req.user;
        const tasks = await Task.find({createdBy: userId});

        res.status(200).json(tasks);
    }
    async getOne (req,res){

    }
    async updateOne (req,res){

    }
    async delete (req,res){

    }
}

export default new TaskController();