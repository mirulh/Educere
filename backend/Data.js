import bcrypt from 'bcryptjs';

const data = {
  contents: [
    {
      name: 'Content Name',
      slug: 'the-odin-project',
      image: '/images/default.png',
      category: 'Category1',
      cost: 'Free',
      hasCert: false,
      type: ['Type1', 'Type2'],
      rating: 0,
      numReviews: 0,
      description: 'sample description',
      link: 'http',
    },
    {
      name: 'Content Name',
      slug: 'the-odin-project',
      image: '/images/default.png',
      category: 'Category1',
      cost: 'Free',
      hasCert: false,
      type: ['Type1', 'Type2'],
      rating: 0,
      numReviews: 0,
      description: 'sample description',
      link: 'http',
    },
    {
      name: 'The Odin Project',
      slug: 'the-odin-project',
      image: '/images/theodinproject.png',
      category: 'Web Development',
      cost: 'Free',
      hasCert: false,
      type: ['Text-Based', 'Hands On Project'],
      rating: 0,
      numReviews: 0,
      description: '',
      link: '',
    },
  ],

  users: [
    {
      name: 'Amirul',
      email: 'amirul@gmail.com',
      password: bcrypt.hashSync('123'),
      isAdmin: true,
    },
    {
      name: 'James',
      email: 'james@gmail.com',
      password: bcrypt.hashSync('123'),
      isAdmin: false,
    },
    {
      name: 'Rex',
      email: 'rex@gmail.com',
      password: bcrypt.hashSync('123'),
    },
  ],
};

export default data;
