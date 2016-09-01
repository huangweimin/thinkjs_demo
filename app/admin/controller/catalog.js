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
   /**
    * iadd action
    * @return {Promise} []
    */
   iaddAction: function(self){

     var allParams = this.post();

     if(allParams._name != '' ){

       this.model('catalog').add({name: allParams._name }).then(result=>{

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

     this.model('catalog').select().then(result=>{

       this.assign({

         list:result

       })

       return this.display();

     })

   },
   /**
    * delete action
    * @return {Promise} []
    */
   deleteAction :function(self){

      var allParams = this.post();

      if(allParams._id){

        this.model('catalog').where({id: ["=", allParams._id]}).delete().then(result=>{

          return this.json({success: true , msg : "删除成功"});

        }).catch(e=>{

          return this.json({success: false , msg : e.message});

        })

      }else{

        return this.json({success: false , msg : "请选择分类"});

      }

   }

});
