const Model = require("../models").styles

module.exports = {
  get: async (req, res) => {
    try {
      const data = await Model.getStyles(req.params.product_id)
      res.status(200).send(data)
    } catch (err) {
      res.status(404).send(err)
    }
  }
}

