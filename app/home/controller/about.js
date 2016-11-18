'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */

  detailAction: function(self){

      this.model('article').where({id:'5'}).find().then(result=>{

        this.assign(result);

        return this.display();

      });

  }

});
