const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
app.use(cors())
app.use(express.json());
const bcrypt = require("bcrypt")

mongoose.connect("mongodb+srv://dpdp8311:dpdp8311@cluster0.5ysqydm.mongodb.net/newform")
    .then(() => {
        console.log("Db is connected")
    })
    .catch((err) => {
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema);

// RESTful API Routes

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, '-password')
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id, '-password')
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post("/api/users", async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        
        res.status(201).json({ 
            message: "User created successfully",
            user: { id: newUser._id, name: newUser.name, email: newUser.email }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.put('/api/users/:id', async (req, res) => {
    try {
        const { name, email } = req.body
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email },
            { new: true, select: '-password' }
        )
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        res.status(200).json({ 
            message: "Login successful",
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
}) 
