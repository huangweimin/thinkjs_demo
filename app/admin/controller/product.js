'use strict';

var Base = require('./base.js');
var qiniu = require("qiniu");

qiniu.conf.ACCESS_KEY = 'f5ID3p9tN6F--DRVlHckTAfO8415kfy-Pm9-tSv_';
qiniu.conf.SECRET_KEY = 'R4OzTpT1zRZW6RwwgC500M84S1MOcr5eBeiNVAFz';

module.exports = think.controller(Base, {
  /**
   * demo action
   * @return {Promise} []
   */
   addAction: function(self){

     return this.display();

   },
   /**
    * iadd action
    * @return {Promise} []
    */
   iaddAction: function(self){

     var allParams = this.post();

     if(allParams._name != '' && allParams._intro != '' && allParams._catalogId != ''){

       this.model('article').add({title: allParams._name ,content:allParams._intro ,catalogId:allParams._catalogId,joinTime:allParams._joinTime}).then(result=>{

         //要上传的空间
        var bucket = 'thinkjs';

        //上传到七牛后保存的文件名
        var key = allParams._inpFlie.split('\\').slice(-1)[0];

        //构建上传策略函数
        function uptoken(bucket, key) {
          var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
          return putPolicy.token();
        }

        //生成上传 Token
        var token = uptoken(bucket, key);

        //要上传文件的本地路径
        var filePath = allParams._inpFlie;

        //构造上传函数
        function uploadFile(uptoken, key, localFile) {
          var extra = new qiniu.io.PutExtra();
            qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
              if(!err) {
                // 上传成功， 处理返回值
                console.log(ret.hash, ret.key, ret.persistentId);
              } else {
                // 上传失败， 处理返回代码
                console.log(err);
              }
          });
        }

        //调用uploadFile上传
        uploadFile(token, key, filePath);


         return this.json({success: true , msg : "添加成功"});

       }).catch(e=>{

         return this.json({success: false , msg : e.message});

       })

     }else{

       return this.json({success: false , msg : "必须传递参数"});

     }

   },
   /**
    * list action
    * @return {Promise} []
    */
   listAction :function(self){

     this.model('catalog').select().then(cate=>{

  	    this.model('article').getList().then(list=>{

         		this.assign({
           		list:list,
  			      cate:cate
         		})

            return this.display();

       	})

     })

   },

   /**
    * delete action
    * @return {Promise} []
    */
   deleteAction :function(self){

      var allParams = this.post();

      if(allParams._id){

        this.model('article').where({id: ["=", allParams._id]}).delete().then(result=>{

          return this.json({success: true , msg : "删除成功"});

        }).catch(e=>{

          return this.json({success: false , msg : e.message});

        })

      }else{

        return this.json({success: false , msg : "请选择文章"});

      }

   },
   /**
    * edit action
    * @return {Promise} []
    */
   editAction: function(self){

     var _id = this.get();

     if(_id){

       this.model('article').where({id:_id.id}).find().then(result=>{

         this.assign(result);

         return this.display();

       });

     }

   },
   /**
    * update action
    * @return {Promise} []
    */
   updateAction: function(self){

     var allParams = this.post();

     if(allParams._name != '' && allParams._intro != '' && allParams._catalogId != ''){

       this.model('article').where({id: ["=", allParams._id]}).update({title: allParams._name ,content:allParams._intro ,catalogId:allParams._catalogId,joinTime:allParams._joinTime}).then(result=>{

         return this.json({success: true , msg : "修改成功"});

       }).catch(e=>{

         return this.json({success: false , msg : e.message});

       })

     }else{

       return this.json({success: false , msg : "必须传递参数"});
     }

   }

});
