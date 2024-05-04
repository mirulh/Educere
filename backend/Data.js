import bcrypt from 'bcryptjs';

const data = {
  contents: [
    {
      name: 'Theodinproject',
      slug: 'theodinproject-1714840412724',
      image: '/images/default.png',
      category: [
        {
          label: 'Web Development',
          value: 'web-development',
        },
        {
          label: 'Fullstack Development',
          value: 'fullstack-development',
        },
      ],
      type: [
        {
          label: 'Text-Based Resources',
          value: 'text-based-resources',
        },
        {
          label: 'Online Courses',
          value: 'online-courses',
        },
      ],
      cost: 'Free',
      hasCert: false,
      description:
        ' The Odin Project is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education. ',
      url: 'theodinproject.com/',
      rating: 0,
      numReviews: 0,
      reviews: [],
    },
    /*     {
      name: 'Content Name',
      slug: 'sample-content1',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 4,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content2',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 4.5,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content3',
      image: '/images/default.png',
      category: [],
      cost: 'Paid',
      hasCert: true,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 5,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content4',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 3,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content5',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 1,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content6',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content7',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content8',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content9',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content10',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content11',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content12',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Content Name',
      slug: 'sample-content13',
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'http',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'The Odin Project',
      slug: 'the-odin-project',
      image: '/images/theodinproject.png',
      category: [],
      cost: 'Paid',
      hasCert: true,
      type: [],
      description: 'a web development course',
      url: 'https://www.theodinproject.com/',
      rating: 3,
      numReviews: 0,
    }, */
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

  submissions: [
    {
      name: 'Submission Content1',
      slug: 'sample-content1' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content2',
      slug: 'sample-content2' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content3',
      slug: 'sample-content3' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content4',
      slug: 'sample-content4' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content5',
      slug: 'sample-content5' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content6',
      slug: 'sample-content6' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content7',
      slug: 'sample-content7' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content8',
      slug: 'sample-content8' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content9',
      slug: 'sample-content9' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
    {
      name: 'Submission Content10',
      slug: 'sample-content10' + Date.now(),
      image: '/images/default.png',
      category: [],
      cost: 'Free',
      hasCert: false,
      type: [],
      description: 'sample description',
      url: 'https://example.com',
      rating: 0,
      numReviews: 0,
    },
  ],
};

export default data;
