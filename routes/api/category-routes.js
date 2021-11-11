const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const catData = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(catData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const icatData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!icatData) {
      res.status(404).json({ message: "Category does not exist!" });
    }
    res.status(200).json(icatData);
  } catch (err) {
    res.status(500).json(err);
  }
  // console.log(icatData);
});

router.post("/", (req, res) => {
  // create a new category

  try {
    const ncatData = await Category.create(req.body);
    res.status(200).json(ncatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value

  try {
    const ccatData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!ccatData[0]) {
      res.status(404).json({ message: "Category ID does not exist!" });
    }
    res.status(200).json(`Category changed to ${req.body.category_name}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value

  try {
    const dcatData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(dcatData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
