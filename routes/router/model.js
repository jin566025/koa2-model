const router = require('koa-router')()
const model = require('../../controller/model/model')
const checkToken  = require('../../common/checkToken.js')

router.post('/api/model/findOne',checkToken, model.findOne);
router.post('/api/model/findAll',checkToken, model.findAll);
router.post('/api/model/remove',checkToken, model.remove);
router.post('/api/model/add',checkToken, model.add);
router.post('/api/model/update',checkToken,model.update);

module.exports = router;