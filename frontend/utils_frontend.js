// getting error message

import detail from './Data';

export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

// uppercase for every word
export const titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

export const createSlug = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
};

export const convertArraySlug = (array) => {
  const newSlug = array.map((a) => ({
    label: titleCase(a.label),
    value: createSlug(a.label),
  }));
  return newSlug;
};

// extract SDL and capitalized it
export const extractSDL = (url) => {
  // Remove protocol (http/https) and www (if present)
  let domain = url.replace(/^https?:\/\//, '').replace(/^www\./, '');
  // Extract only the domain name (excluding path)
  domain = domain.split('/')[0];
  // Split domain by dots and take the first part
  const parts = domain.split('.');
  const websiteName = parts[0];
  const capitalized =
    websiteName.charAt(0).toUpperCase() + websiteName.slice(1);
  return capitalized;
};

export const allTypes = detail.materialTypes.map((type) => ({
  label: type.name,
  value: createSlug(type.name),
}));

export const allCategories = detail.contentCategories.map((category) => ({
  label: category.name,
  value: createSlug(category.name),
}));
