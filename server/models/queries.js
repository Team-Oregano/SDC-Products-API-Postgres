
const stylesQuery = `SELECT (SELECT Json_agg(styles_list)
  FROM   (SELECT p.styles.id
                 AS
                         style_id,
                 p.styles.NAME,
                 p.styles.original_price,
                 p.styles.sale_price,
                 p.styles.default
                 AS
                         "default?",
                 (SELECT Json_agg(photos_list)
                  FROM   (SELECT thumbnail_url,
                                 url
                          FROM   p.photos
                          WHERE  p.photos.style_id = p.styles.id) AS
                         photos_list)
                 AS
                         photos,
                 (SELECT Json_object_agg(p.skus.id,
                         Json_build_object('quantity',
                         p.skus.quantity, 'size'
                                 , p.skus.size)) AS
                         skus
                  FROM   p.skus
                  WHERE  p.skus.style_id = p.styles.id)
                 AS skus
          FROM   p.styles
          WHERE  product_id = $1) AS styles_list) AS results`;

const featuresQuery =
`SELECT p.id,
p.NAME,
p.slogan,
p.description,
p.category,
p.default_price,
(SELECT Json_agg(f)
FROM   (SELECT feature,
                value
         FROM   p.features
         WHERE  product_id = 1) AS f) AS features
FROM   p.products p
WHERE  id = $1`;

module.exports = {
  featuresQuery: featuresQuery,
  stylesQuery: stylesQuery
};




