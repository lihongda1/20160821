var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb/localhost:27017/20160821');  //"mongodb://localhost:端口号/数据库名称"
//如果字段名称不符合
var presonSchema = new mongoose.Schema({
    username:String,  //用户名
    email:String,  //邮箱
    gender:String,  //性别
    birthday:Date,  //生日
    married:String    //婚姻状况
})

//定义一个可以操作的数据库集合
//第一个参数是模型的名称，
var personModel = mongoose.model('person',PersonSchema);

//3，定于一个实体，  集合的文档对像
new personModel({
    username:'王五',  //用户名
    email:'wangwu@qq.com',  //邮箱
    gender:'男',  //性别
    birthday:new Date(),  //生日
    married:'待婚姻'    //婚姻状况
});

wangwuEntity.save(function(err,result){
    if(err){
        console.error(err);
    }else{
        //如果成功的话，result是保存成功之后的文档
        console.log(result);
    }
});



