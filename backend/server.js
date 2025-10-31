const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
app.use(cors())
app.use(express.json());
const bcrypt=require("bcrypt")
mongoose.connect("mongodb+srv://dpdp8311:dpdp8311@cluster0.5ysqydm.mongodb.net/newform")
    .then(() => {
console.log("Db is connected")
    })
    .catch((err) => {
        console.log(err)
    }
)

const newSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Users = mongoose.model("Users", newSchema);
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
app.get('/users', async (req, res) => {
    const users = await Users.find({})
    res.json(users)
})
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    
    try {
        const newUser = new Users({ name, email, password: hashedpassword });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

 )
app.post("/login", async (req, res) => {
  try {
      const user = await Users.findOne({ email: req.body.email });
      const passwordCheck = await bcrypt.compare(req.body.password, user.password);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
   if(!passwordCheck===false){
    return res.status(401).json({ message: "Incorrect password" });
   }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); 
