let tableData = require('../database/tableData');

let table = async (ctx, next) => {
    console.log(ctx.request.query);
    ctx.response.body = tableData.data;
}


module.exports = {
    'GET /table': table
}