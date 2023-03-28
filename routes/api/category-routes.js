const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

/* TODO -
Fill out the unfinished routes in product-routes.js, tag-routes.js, and category-routes.js 
to perform create, read, update, and delete operations using your Sequelize models. */

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({ 
    where: { 
        id: req.params.id,
     },
  })
        .then((category) => res.json(category))
        .catch((err) => res.json(err)); 
});

module.exports = router;