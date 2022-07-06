const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://quanganh04012000:Nhoxanh2233@cluster0.giulr.mongodb.net/test" )
        console.log('Connect successfully');
    }catch(error){
        console.log('Connect Fail!');
    }

}


module.exports = {connect};