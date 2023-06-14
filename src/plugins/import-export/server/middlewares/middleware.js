const jwt = require('jsonwebtoken');

module.exports = ({env}) => ({
  // Custom middleware definitions
  custom: {
    // Example authentication middleware using JWT
    jwt: (ctx, next) => {
      // Add your JWT authentication logic here
      // Verify the JWT token, extract user information, etc.
      // If authentication fails, you can return an error or redirect the user

      // Example: Verify the token and set user information in the context state
      const token = ctx.request.headers['authorization'];
      console.log("--token: ",token)
      console.log("--env.token: ",env.token)
      if (!token) {
        ctx.throw(401, 'No token provided');
      }
      // Verify the token and extract user information
      jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
          ctx.throw(401, 'Invalid token');
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

      console.log("---ctx.state.user in middleware: ",ctx.state.user)

      return next();
    },
  },

});
