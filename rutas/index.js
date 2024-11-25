const express = require('express');
const router = express.Router();

const homeController = require('../controladores/homeController');
const firebaseController = require('../controladores/firebaseController');

let api_ruta="/api/v1/";
//home
router.get(`/`, homeController.index);



//firebase
router.get(`${api_ruta}firebase`, firebaseController.index);
router.get(`${api_ruta}firebase/:id`, firebaseController.show);
router.post(`${api_ruta}firebase`, firebaseController.create);
router.put(`${api_ruta}firebase/:id`, firebaseController.update);
router.delete(`${api_ruta}firebase/:id`, firebaseController.destroy);


module.exports = router;