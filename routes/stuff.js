const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');


// ajouter un truc dans la BD
router.post('/', auth, multer, stuffCtrl.createThing);

// afficher un seul objet
router.get('/:id', auth, stuffCtrl.showOneThing);

// modifier un élément
router.put('/:id', auth, multer, stuffCtrl.modifyThing);

// supprimer un élément
router.delete('/:id', auth, stuffCtrl.deleteThing);

// afficher la BD
router.get('/', auth, stuffCtrl.showAllThings);

module.exports = router;