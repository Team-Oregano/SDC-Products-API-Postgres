const db = require('../../database/index');

module.exports = {
  getProducts: async (page = 1, count = 5) => {
    var offset = (page - 1) * count;
    try {
      const res = await db.query('SELECT * FROM products LIMIT $1 OFFSET $2', [count, offset]);
      return res.rows;
    } catch (err) {
      console.error(err);
    }
  }
};
