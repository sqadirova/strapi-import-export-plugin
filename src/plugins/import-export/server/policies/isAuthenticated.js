module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    await next();
  } else {
    return ctx.unauthorized('You are not authenticated.');
  }
};
