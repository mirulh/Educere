import bcrypt from 'bcryptjs';

const data = {
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
