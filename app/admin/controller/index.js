'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){

    this.model('article').select().then(result=>{
      this.assign({
        list:result
      })
      return this.display();
    })
  }
});
