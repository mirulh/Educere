import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      // [1]
      expiresIn: '30d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token Expires or Invalid' });
      } else {
        req.user = decode; // [2] decoded token payload
        next();
        // next() is called after attaching req.user
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

/* References

[1] Token duration is described in string or integer
expiresIn: '30d' = 30 days
expiresIn: 60 = 60 seconds
when the token expires, user no longer be able to perform request that requires authentication.
Set the expiration to 60 to observe the expiration effect
[2] decode value of the token reveals the user details
https://jwt.io/#debugger-io

*/
