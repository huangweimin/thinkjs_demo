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
  getList(){

    return this.query('select * from think_article A Join think_catalog B on A.catalogId=B.id')

  }

});
