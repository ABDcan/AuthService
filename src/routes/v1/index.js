const expreess = require('express');

const userController = require('../../controllers/user-controller');
const {AuthRequestValidators} = require('../../middlewares/index');


const router = expreess.Router();

router.post('/signup',AuthRequestValidators.validateuserAuth
    ,userController.create);
router.post('/signin',
    AuthRequestValidators.validateuserAuth
    ,userController.signIn);
router.get('/isAuthenticated',userController.isAuthenticated);
module.exports = router;