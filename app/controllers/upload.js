let upload = async (ctx, next) => {
  console.log(ctx.request);
  let name = ctx.request.body.name;
  ctx.response.body = JSON.stringify({
    "name": 'new' + name,
    "newUrl": 'newUrl' + name
  });

}

module.exports = {
  'POST /upload': upload
};