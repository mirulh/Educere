// getting error message

import detail from './Data';

export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const createSlug = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
};

export const allTypes = detail.materialTypes.map((type) => ({
  label: type.name,
  value: createSlug(type.name),
}));

export const allCategories = detail.contentCategories.map((category) => ({
  label: category.name,
  value: createSlug(category.name),
}));
