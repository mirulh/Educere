import express from 'express';
import Content from '../models/contentModel.js';
import expressAsyncHandler from 'express-async-handler';

const contentRouter = express.Router();

contentRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const contents = await Content.find();
    res.send(contents);
  })
);

const PAGE_SIZE = 6;

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
      .limit(pageSize);

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

*/
