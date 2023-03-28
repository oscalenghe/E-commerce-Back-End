const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

/* TODO -
Fill out the unfinished routes in product-routes.js, tag-routes.js, and category-routes.js 
to perform create, read, update, and delete operations using your Sequelize models. */

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
  .then((categories)=> {
    res.json(categories);
  });
  });

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
  .then((categories) => {
    res.json(categories);
  });
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