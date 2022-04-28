const db = require('../../database/index');

module.exports = {
  getRelatedPs: async (productId) => {
    try {
      const res = await db.query('SELECT related_product_id FROM p.related WHERE current_product_id = $1', [productId]);
      return res.rows.map((relatedP) => {
        return relatedP.related_product_id;
      });
    } catch (err) {
      console.error(err);
    }
  }
}
