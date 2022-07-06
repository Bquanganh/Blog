const Blog = require('../models/blog.js')

class BlogController {
    index(req,res){
        Blog.find({}, function (err, Blog){
            if(!err){
                res.json(Blog);}else{
                    res.status(400).json({error:'message'});
                }
        });
    };
}
