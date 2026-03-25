const User = require("../models/User");
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiration = "2h";

function getAllUsers(req, res) {
  res.send("Sending all users...");
}

function getUserById(req, res) {
  res.send(`Data for user: ${req.params.id}`);
}

async function registerUser(req, res) {
 try {
    //check if user exists
    const dbUser = await User.findOne({ email: req.body.email });

    if (dbUser) {
      return res.status(400).json({ message: "User already exist." });
    }
    // create a new user
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json(user);
    // const email = await User.create(req.body);
    // const password = await User.create(req.body);
  } catch (error) {
    console.error(error);
  }

  if (!email) {
    res.json;
  }
}

async function loginUser(req, res){
  try {
    const {email, password} = req.body

    

    // check if user doesn't exist
    const dbUser = await User.findOne({email}) //email: req.body.email

    //console.log('This should give an email', dbUser);

    if(!dbUser){
      return res.status(400).json({message: "Incorrect email or password"})
    }

    const passwordMatched = await dbUser.isCorrectPassword(password);

    if(!passwordMatched){
      return res.status(400).json({message: "Incorrect email or password"})
    }
    
    const payload = {
      _id:dbUser._id,
      username:dbUser.username,
      email:dbUser.email
    }

    // Create token
    const token = jwt.sign({ data:payload}, secret, { expiresIn: expiration }) //jwt.sign({data:payload}, secret, {expairesIn:expiration})
                 // jwt.sign({ data:payload}, secret, { expiresIn: expiration })

    res.json({token, dbUser}); //not necessary to do this one should be good
    console.log('This is the dbuser', dbUser);
    
    
  } catch (error) {
    console.error(error);
    
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser
};
