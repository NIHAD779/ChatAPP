const Users = require('../models/userModel') 

async function login (req, res) {
        const {username,password} = req.body;
        const user = await Users.findOne({username});
        if (user)
        {
            if (password === user.password)
            {
                return res.json({message:"login success",user:user ,status:true})
            }
            else
            {
                return res.json({message:"incorrect password",status:false})
            }
        }
        else
        {
            return res.json({message:"Username not found",status:false})
        }
             
    }



async function register(req, res){
    if(!req.body) return res.status(400).json("Post HTTP not provided");
    console.log("user creation initiated")
    const {username,email,password} = req.body;

    const checkUser = await Users.findOne({username});
    if (checkUser){
        return res.json({ msg: "Username already used", status: false });
    }
    const checkEmail = await Users.findOne({email});
    if (checkEmail){
        return res.json({ msg: "Email already used", status: false });
    }
    const create = await new Users({
        username,
        email,
        password
    });

    create.save((err) =>{
        if(!err) return res.json(create);
        return res.status(400).json({message: `Error in creating user ${err}`});
    });
}

module.exports ={
    register,
    login
}