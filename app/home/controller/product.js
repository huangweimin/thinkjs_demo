'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  listAction: function(self){

    this.model('catalog').where({id:1}).select().then(result=>{
      var item = result[0];
      this.assign({
        title:item.name,
        list:item.article
      })
      return this.display();
    })
  },

  detailAction: function(self){
    var id = this.get("id");
    if(!id){
      return think.statusAction(404, this.http);
    }else{
        this.model('article').where({id:id}).find().then(result=>{
        this.assign(result);
        return this.display();
      });
    }
  }

});
