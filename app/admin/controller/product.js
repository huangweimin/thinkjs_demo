'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
   addAction: function(self){

     return this.display();

   },

   iaddAction: function(self){

     var allParams = this.post();
     
     if(allParams._name != '' && allParams._intro != '' && allParams._catalogId != ''){

       this.model('article').add({title: allParams._name ,content:allParams._intro ,catalogId:allParams._catalogId,joinTime:allParams._joinTime}).then(result=>{

         return this.json({success: true , msg : "添加成功"});

       }).catch(e=>{

         return this.json({success: false , msg : e.message});

       })

     }else{

       return this.json({success: false , msg : "必须传递参数"});

     }

   },

   listAction :function(self){

     this.model('article').select().then(result=>{

       this.assign({
         list:result
       })
       return this.display();
     })

   },

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

   editAction: function(self){

     var _id = this.get();

     if(_id){

       this.model('article').where({id:_id.id}).find().then(result=>{

         this.assign(result);

         return this.display();

       });

     }

   },

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
