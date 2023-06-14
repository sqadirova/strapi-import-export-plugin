module.exports = async (ctx, next) => {
  console.log("---ctx.state.user in policy: ",ctx.state.user)
  if (ctx.state.user) {
     return next;
  } else {
    return ctx.throw(401,'You are not authenticated.');
  }
  return next;
};
