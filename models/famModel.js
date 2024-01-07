const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    fatherName : {
        type: String,
        required: true
    },
    motherName : {
        type: String,
        required: true
    },
    fatherPicture : {
        type: Array,
        required: true
    },
    motherPicture : {
        type: Array,
        required: true
    },
    children : {
        type: Array,
        required: true
    },
    childrenPicture : {
        type: Array,
        required: true
    },
})

const User = mongoose.model("User-Test", userSchema)
module.exports = User