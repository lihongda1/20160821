var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb/localhost:27017/20160821');  //"mongodb://localhost:�˿ں�/���ݿ�����"
//����ֶ����Ʋ�����
var presonSchema = new mongoose.Schema({
    username:String,  //�û���
    email:String,  //����
    gender:String,  //�Ա�
    birthday:Date,  //����
    married:String    //����״��
})

//����һ�����Բ��������ݿ⼯��
//��һ��������ģ�͵����ƣ�
var personModel = mongoose.model('person',PersonSchema);

//3������һ��ʵ�壬  ���ϵ��ĵ�����
new personModel({
    username:'����',  //�û���
    email:'wangwu@qq.com',  //����
    gender:'��',  //�Ա�
    birthday:new Date(),  //����
    married:'������'    //����״��
});

wangwuEntity.save(function(err,result){
    if(err){
        console.error(err);
    }else{
        //����ɹ��Ļ���result�Ǳ���ɹ�֮����ĵ�
        console.log(result);
    }
});



