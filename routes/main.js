/**
 * Created by linyuhua on 2017/5/17.
 */

const router = require('koa-router')();
const userInfoController = require('./../controller/user-info');

const routers = router
    .get('/', async (ctx) => {
        const title = 'main';
        await ctx.render('main', {
            title
        })
    })
    .post('/get-user',userInfoController.getUser)

module.exports = routers;