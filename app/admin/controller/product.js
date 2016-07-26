'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
   addAction: function(self){
     
     console.log('in')
     this.model('catalog').where({id:1}).select().then(result=>{
       var item = result[0];
       this.assign({
         title:item.name,
         list:item.article
       })
       return this.display();
     })
   }
});
