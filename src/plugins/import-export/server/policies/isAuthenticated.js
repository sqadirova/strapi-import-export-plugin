module.exports = async (ctx, next) => {
  console.log("---ctx.state.user: ",ctx.state.user)
  if (ctx.state.user) {
    await next();
  } else {
    return ctx.throw(401,'You are not authenticated.');
  }
};
