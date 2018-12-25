/**
 * Created by tigra on 25-Dec-18.
 */
const express = require("express");
const routes = express.Router();



const navbarController = require("../controllers/navbar");
const footerController = require("../controllers/footer");
const homeController = require("../controllers/home");
const aboutController = require("../controllers/about");
const servicesController = require("../controllers/services");
const pricelistController = require("../controllers/pricelist");
const contactsController = require("../controllers/contacts");
const galleryController = require("../controllers/gallery/gallery");
const galleryD1Controller = require("../controllers/gallery/galleryD1");
const galleryD2Controller = require("../controllers/gallery/galleryD2");
const galleryD3Controller = require("../controllers/gallery/galleryD3");
const galleryD4Controller = require("../controllers/gallery/galleryD4");
const galleryD5Controller = require("../controllers/gallery/galleryD5");
const galleryD6Controller = require("../controllers/gallery/galleryD6");
const galleryD7Controller = require("../controllers/gallery/galleryD7");
const galleryD8Controller = require("../controllers/gallery/galleryD8");
const galleryD9Controller = require("../controllers/gallery/galleryD9");


routes.get('/navbar', navbarController.getData);
routes.get('/footer', footerController.getData);

routes.get('/home-page', homeController.getData);
routes.get('/about-page', aboutController.getData);
routes.get('/services-page', servicesController.getData);
routes.get('/pricelist-page', pricelistController.getData);
routes.get('/contacts-page', contactsController.getData);

routes.get('/gallery-page', galleryController.getData);
routes.get('/gallery-d1-page', galleryD1Controller.getData);
routes.get('/gallery-d2-page', galleryD2Controller.getData);
routes.get('/gallery-d3-page', galleryD3Controller.getData);
routes.get('/gallery-d4-page', galleryD4Controller.getData);
routes.get('/gallery-d5-page', galleryD5Controller.getData);
routes.get('/gallery-d6-page', galleryD6Controller.getData);
routes.get('/gallery-d7-page', galleryD7Controller.getData);
routes.get('/gallery-d8-page', galleryD8Controller.getData);
routes.get('/gallery-d9-page', galleryD9Controller.getData);



module.exports = routes;
