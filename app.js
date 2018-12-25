/**
 * Created by tigra on 25-Dec-18.
 */
const  express = require('express');
const app = express();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvmDB', {useNewUrlParser: true})
        .then(()=>console.log('MongoDB has started ...'))
        .catch((e)=>console.log(e));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('cors')());

require('./models/Navbar');
require('./models/Footer');
require('./models/Gallery/Gallery');
require('./models/Gallery/GalleryD1');
require('./models/Gallery/GalleryD2');
require('./models/Gallery/GalleryD3');
require('./models/Gallery/GalleryD4');
require('./models/Gallery/GalleryD5');
require('./models/Gallery/GalleryD6');
require('./models/Gallery/GalleryD7');
require('./models/Gallery/GalleryD8');
require('./models/Gallery/GalleryD9');
require('./models/Home');
require('./models/About');
require('./models/Services');
require('./models/Pricelist');
require('./models/Contacts');



const navbar = require('./json/navbar.json');
const footer = require('./json/footer.json');
const gallery = require('./json/gallery/gallery.json');
const galleryD1 = require('./json/gallery/gallery-d.json');
const galleryD2 = require('./json/gallery/gallery-d2.json');
const galleryD3 = require('./json/gallery/gallery-d3.json');
const galleryD4 = require('./json/gallery/gallery-d4.json');
const galleryD5 = require('./json/gallery/gallery-d5.json');
const galleryD6 = require('./json/gallery/gallery-d6.json');
const galleryD7 = require('./json/gallery/gallery-d7.json');
const galleryD8 = require('./json/gallery/gallery-d8.json');
const galleryD9 = require('./json/gallery/gallery-d9.json');
const home = require('./json/home.json');
const about = require('./json/about.json');
const services = require('./json/services.json');
const pricelist = require('./json/pricelist.json');
const contacts = require('./json/contacts.json');

const Navbar = mongoose.model('navbar');
const Footer = mongoose.model('footer');
const Gallery = mongoose.model('gallery');
const GalleryD1 = mongoose.model('galleryD1');
const GalleryD2 = mongoose.model('galleryD2');
const GalleryD3 = mongoose.model('galleryD3');
const GalleryD4 = mongoose.model('galleryD4');
const GalleryD5 = mongoose.model('galleryD5');
const GalleryD6 = mongoose.model('galleryD6');
const GalleryD7 = mongoose.model('galleryD7');
const GalleryD8 = mongoose.model('galleryD8');
const GalleryD9 = mongoose.model('galleryD9');
const Home = mongoose.model('home');
const About = mongoose.model('about');
const Services = mongoose.model('services');
const Pricelist = mongoose.model('pricelist');
const Contacts = mongoose.model('contacts');


// contacts.forEach((item)=>{
//    new Contacts(item).save();
// });




app.use('/', require('./routes/index'));

app.use('/', (req, res)=>{
    res.status(404).json({
        message: "Not Found"
    })
});

module.exports = app;