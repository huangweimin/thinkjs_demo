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
       this.model('article').add({title: allParams._name ,content:allParams._intro ,catalogId:allParams._catalogId}).then(result=>{
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

   }

});
