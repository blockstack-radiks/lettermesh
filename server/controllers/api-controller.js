const express = require('express');

const { getGraphiteHTML } = require('../helpers');

const makeApiController = (db) => {
  const router = express.Router();

  router.get('/posts/:id', async (req, res) => {
    console.log(req.params.id);
    // const blogPost = await db.findOne({ _id: req.params.id });
    const match = {
      $match: { _id: req.params.id },
    };
    const blogLookup = {
      $lookup: {
        from: 'radiks-server-data', localField: 'userGroupId', foreignField: '_id', as: 'blog',
      },
    };
    const authorLookup = {
      $lookup: {
        from: 'radiks-server-data', localField: 'authorName', foreignField: '_id', as: 'author',
      },
    };
    const [blogPost] = await db.aggregate([match, blogLookup, authorLookup]).toArray();
    const [author] = blogPost.author;
    const [blog] = blogPost.blog;
    blogPost.author = author;
    blogPost.blog = blog;

    const { graphiteUrl } = blogPost;
    blogPost.sanitizedContent = await getGraphiteHTML(graphiteUrl);
    res.json(blogPost);
  });

  return router;
};

module.exports = makeApiController;
