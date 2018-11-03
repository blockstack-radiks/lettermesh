const express = require('express');

const makeApiController = (db) => {
  const router = express.Router();

  router.get('/posts/:id', async (req, res) => {
    console.log(req.params.id);
    // const blogPost = await db.findOne({ _id: req.params.id });
    const match = {
      $match: { _id: req.params.id },
    };
    const lookup = {
      $lookup: {
        from: 'radiks-server-data', localField: 'userGroupId', foreignField: '_id', as: 'blog',
      },
    };
    const [blogPost] = await db.aggregate([match, lookup]).toArray();
    res.json(blogPost);
  });

  return router;
};

module.exports = makeApiController;
