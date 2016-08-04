'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
   addAction: function(self){

     console.log('in')
     
     this.model('article').add({title: "xxx", content: "yyy",catalogId:"1"}).then(result=>{
       return this.display();
     })

   }
});
