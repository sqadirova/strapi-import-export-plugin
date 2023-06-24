const jwt = require("jsonwebtoken");

module.exports = async (ctx, next) => {
  console.log("---ctx.state.user in policy: ", ctx.state.user)
  // Add your JWT authentication logic here
  // Verify the JWT token, extract user information, etc.
  // If authentication fails, you can return an error or redirect the user

  // Example: Verify the token and set user information in the context state
  const token = ctx.request.headers['authorization'];
  console.log("--token in policy: ", token)
  // console.log("--env.token: ", env.transfer.token)
  // console.log(" env.auth.secret: ", env.secret)

  if (!token) {
     ctx.throw(401, 'No token provided');
  }
  // Verify the token and extract user information
  jwt.verify(token, 'tobemodified', (err, decoded) => {
    if (err) {
      ctx.throw(401, 'Invalid token');
     // return ctx.unauthorized(`Invalid token`);
    }


    // Extract user information from the decoded token
    const {id, username, email} = decoded;

    // Set the user information in the context state
    // strapi.admin.user={
    //
    // };

    ctx.state.user = {
      id,
      username,
      email,
      token
    };
  });

  console.log("---ctx.state.user in policy2: ", ctx.state.user)

  return next;

  ////old policy
  // if (ctx.state.user) {
  //   return next;
  // } else {
  //   return ctx.throw(401, 'You are not authenticated.');
  // }

  // return next;
};
