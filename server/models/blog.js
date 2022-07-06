const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID

const Blog = new Schema({
    id : ObjectID,
    title: String,
    img: String,
    content: String
});

module.exports = mongoose.model('Blog',Blog);