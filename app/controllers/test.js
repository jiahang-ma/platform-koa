const test = async (ctx, next) => {
    console.log(ctx);
    ctx.response.body = {
        msg: 'success',
        data: ctx
    }

}

module.exports = {
    'GET /test': test
}