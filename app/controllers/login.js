const loginData = require('../database/loginData');

let login = async (ctx, next) => {
    console.log(ctx.request.body);
    if (ctx.request.body.userName == 123456 && ctx.request.body.passWord == 123) {

        ctx.response.body = loginData.data;

    } else {
        let data = {
            result: '99999999',
            msg: "用户名或者密码错误"
        }
        ctx.response.body = data;


    }


}

module.exports = {
    'POST /login': login
}