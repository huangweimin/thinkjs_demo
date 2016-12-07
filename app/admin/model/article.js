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
  getList(ctgid , title){

    var query = 'select A.id,A.title,A.joinTime,B.name from think_article A Join think_catalog B on A.catalogId=B.id';

    if(ctgid !=-1 ){
      query += ` and A.catalogId = ${ctgid}`;
    }
    if(title){
      query += ` and A.title like '%${title}%'`;
    }

    return this.query(query);

  }

});
