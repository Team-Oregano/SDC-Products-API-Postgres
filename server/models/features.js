const db = require('../../database/index');
var query = require('./queries').featuresQuery;

module.exports = {
  getFeatures: async (product_id) => {

    try {
      const res = await db.query(query, [product_id]);
      return res.rows[0];
    } catch (err) {
      console.error(err);
    }
  }
};