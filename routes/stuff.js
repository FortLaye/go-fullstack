const express = require('express');
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, stuffCtrl.createThing);

router.get('/', auth, stuffCtrl.getAllThings);

router.get('/:id', auth, stuffCtrl.getOneThing);

router.put('/:id', auth, stuffCtrl.updateThing);

router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;

