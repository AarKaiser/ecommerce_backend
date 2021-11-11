const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {

  // find all tags
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findAll(
      {
        include: [{ model: Product }]
      }
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {

  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const itagData = await Product.findByPk(req.params.id,{
      include: [{model:Category}, {model:Tag}],
      });

    res.status(200).json(itagDta);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {

  // create a new tag

  try {
    const ntagData = await Tag.create(req.body);
    res.status(200).json(ntagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {

  // update a tag's name by its `id` value

  try {
    const utagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        }
      });
      if (!utagData) {
        res.status(404).json({ message: "Tag doesn't exist!"});
      }
      res.status(200).json(`${req.body.tag_name} has been updated!`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {

  // delete on tag by its `id` value

  try {
    const dtagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!dtagData) {
      res.status(404).json({ message: "Tag does not exist!"});
    }
    res.status(200).json(`${req.params.id} sucessfully deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
