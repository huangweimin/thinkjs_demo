'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
   listAction: function(self){

     return this.display();

   },

   addAction: function(self){

     return this.display();

   }

});
