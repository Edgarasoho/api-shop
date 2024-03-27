const mongoose=require ('mongoose')

const UserShema = new mongoose.Schema ({
    username: type: String, require: true, unique: true,
    pasword: type: String, require: true},

);

const User = mongoose.model("user")