'use strict';
/**
 * relation model
 * @type {Class}
 */
module.exports = think.model('relation', {
  /**
   * init
   * @return {} []
   */
  init(){
    this.super('init', arguments);
    this.relation = {
      article:{
        type: think.model.HAS_MANY,
        fKey : "catalogId"
      }
    }
  }
});
