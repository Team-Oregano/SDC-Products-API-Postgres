const db = require('../../database/index');
var query = require('./queries').stylesQuery;

module.exports = {
  getStyles: async (productId) => {
    try {
      const res = await db.query(query, [productId])
      res.rows[0]["product_id"] = productId;
      return res.rows[0];
    } catch (err) {
      console.error(err);
    }
  }
};

