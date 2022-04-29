
const stylesQuery = `SELECT (SELECT Json_agg(styles_list)
  FROM   (SELECT styles.id
                 AS
                         style_id,
                 styles.NAME,
                 styles.original_price,
                 styles.sale_price,
                 styles.default
                 AS
                         "default?",
                 (SELECT Json_agg(photos_list)
                  FROM   (SELECT thumbnail_url,
                                 url
                          FROM   photos
                          WHERE  photos.style_id = styles.id) AS
                         photos_list)
                 AS
                         photos,
                 (SELECT Json_object_agg(skus.id,
                         Json_build_object('quantity',
                         skus.quantity, 'size'
                                 , skus.size)) AS
                         skus
                  FROM   skus
                  WHERE  skus.style_id = styles.id)
                 AS skus
          FROM   styles
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
         FROM   features
         WHERE  product_id = $1) AS f) AS features
FROM   products p
WHERE  id = $1`;

module.exports = {
  featuresQuery: featuresQuery,
  stylesQuery: stylesQuery
};




