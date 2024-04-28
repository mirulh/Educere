import express from 'express';
import Content from '../models/contentModel.js';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils_backend.js';

const contentRouter = express.Router();

contentRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const contents = await Content.find();
    res.send(contents);
  })
);

const PAGE_SIZE = 3;

contentRouter.get(
  '/search',
  expressAsyncHandler(async (req, res) => {
    const { query } = req; //[1]
    // res.send(query); // [2]
    const searchTerm = query.searchTerm || '';
    const category = query.category || '';
    const cost = query.cost || '';
    const type = query.type || '';
    const rating = query.rating || '';
    const order = query.order || '';
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const searchTermFilter =
      searchTerm && searchTerm !== 'all'
        ? {
            name: {
              $regex: searchTerm,
              $options: 'i',
              // i stands for case-insensitive
            },
          }
        : {};

    // category
    const categoryFilter = category && category !== 'all' ? { category } : {};

    // cost
    const costFilter = cost && cost !== 'all' ? { cost } : {};

    // type
    const typeFilter = type && type !== 'all' ? { type } : {};

    // rating
    const ratingFilter =
      rating && rating !== 'all'
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};

    // sort by featured needs to be implemented later
    const sortOrder =
      order === 'latest'
        ? { createdAt: -1 }
        : order === 'oldest'
        ? { createdAt: 1 }
        : order === 'topRated'
        ? { rating: -1 }
        : order === 'lowRated'
        ? { rating: 1 }
        : { _id: -1 };

    const contents = await Content.find({
      ...searchTermFilter,
      ...categoryFilter,
      ...costFilter,
      ...typeFilter,
      ...ratingFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize); // [5]

    // learn more: mongodb skip and limit
    // https://www.scaler.com/topics/mongodb-pagination/

    const countContents = await Content.countDocuments({
      ...searchTermFilter,
      ...categoryFilter,
      ...costFilter,
      ...typeFilter,
      ...ratingFilter,
    });

    res.send({
      contents,
      countContents,
      page,
      pages: Math.ceil(countContents / pageSize),
      // skipValue: pageSize * (page - 1),
    });
    // res.send(contents); // [4]
  })
);

contentRouter.get(
  '/filters',
  expressAsyncHandler(async (req, res) => {
    const categories = await Content.distinct('category');
    const costs = await Content.distinct('cost');
    const types = await Content.distinct('type');
    res.send({ categories, costs, types });
  })
);

const PAGE_SIZE_CONTENT = 5;

contentRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = PAGE_SIZE_CONTENT;

    const contents = await Content.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countContents = await Content.countDocuments();

    res.send({
      contents,
      countContents,
      page,
      pages: Math.ceil(countContents / pageSize),
      // if 1.2 then 2
    });
  })
);

contentRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const content = await Content.findById(req.params.id);
    if (content) {
      await content.deleteOne();
      res.status(200).send({ message: `deleted content id ${content._id}` });
    } else {
      res.status(404).send({ message: 'Content Not Found' });
    }
  })
);

contentRouter.get(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const content = await Content.findById(req.params.id);

    if (content) {
      res.send(content);
    } else {
      res.status(404).send({ message: 'Content Not Found' });
    }
  })
);

contentRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const contentId = req.params.id;
    const content = await Content.findById(contentId);

    if (content) {
      // res.send({ message: 'content found' });
      content.name = req.body.name;
      content.slug = req.body.slug;
      content.image = req.body.image;
      content.cost = req.body.cost;
      content.hasCert = req.body.hasCert;
      content.description = req.body.description;
      content.url = req.body.url;
      await content.save();
      res.send({ message: 'Content Updated', updated: content });
    }
  })
);

// contentRouter.post(
//   '/'.isAdmin,
//   isAuth,
//   expressAsyncHandler(async (req, res) => {})
// );

export default contentRouter;

/* 

References

[1] query 

query here refers to the parameters inside the query strings of a URL. Eg. page, category, cost, etc inside 

`?page=${page}&query=${query}&category=${category}&cost=${cost}&rating=${rating}&order=${order}`

[2] How to view the query in client side


[3] How to filter using mongo find method

Find an object that match this values
    const querySlug = { slug: 'sample-content1' };
    const queryCert = { hasCert: 'true' };
    const queryCost = { cost: 'Paid' };
    const queryType = { types: 'Type1' };

    const contents = await Content.find({
      ...queryCert,
      ...queryCost,
      ...queryType,
    });

    By spreading these filter objects (...queryFilter, ...categoryFilter, ...priceFilter, ...ratingFilter) into the find() method call, it combines them into a single query object. This way, each filter can contribute to the criteria used to fetch contents from the database.

    Important


[4] Difference between 

res.send(contents) and res.send({contents})

the first one to send one data, the second can send multiple data

- how to retrieve the data properly

- res.send(contents)
    contents: action.payload 

    (no destructuring)

- res.send({contents})
    contents: action.payload.contents 

    (because destructuring)


[5] MongoDB pagination: skip and limit

- limit, eg: 

db.books.find().limit(10)

explanation: This will return the first 10 books in the books collection, according to the natural order of the documents in the collection.

- skip, eg:

db.collection.find().skip(n)

Parameters n: Specifies the number of documents to skip. If n is not provided or is equal to 0, the query will not skip any documents.

explanation:  Suppose you have a collection named books that contains information about books. You can use the skip() method to skip the first 10 books in the collection and return the remaining books as follows: 

db.books.find().skip(10)

!IMPORTANT

Usage in the code:

      .skip(pageSize * (page - 1))

When page equals to 1 (when user is on the first page) the value calculated of .skip will be 0. This means there is no document will be skipped on first page. When user navigate to second page, page 2, the skip value will be 5, .skip(5) meaning on the second page, 5 documents will be skipped therefore, imitating the pagination effects


*/
