const expreess = require('express');

const userController = require('../../controllers/user-controller');

const router = expreess.Router();

router.post('/signup',userController.create);
router.post('/signin',userController.signIn);
module.exports = router;