const Messages = require("../models/messageModel")

async function addMsg(req,res){
    if(!req.body) return res.status(400).json("Post HTTP not provided");
    try{
        const {from,to,message} = req.body;
        const data = await Messages.create({
            message:{text:message},
            users:[from,to],
            sender:from
        })

        if (data) return res.json({msg:"Message added successfully"})
        else return res.json({msg:"Failed to add messsage to database"})
    }catch(ex){
        console.log(ex)
    }
}

async function getMsg(req,res){
    try{
        const {from,to} = req.body;

        const messages = await Messages.find({
            users:{
                $all:[from,to]
            }
        }).sort({updatedAt:1})
        console.log(messages)
        const projectedMessages = messages.map((msg)=>{
            return{
                fromSelf:msg.sender.toString() === from,
                message:msg.message.text
            }
        })
        res.json(projectedMessages)
    }catch(ex){
        console.log(ex)
    }
}


module.exports = {
    addMsg,
    getMsg
}