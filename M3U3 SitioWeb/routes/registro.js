var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('registro', { title: 'ChessBattle - Registro' });
});

module.exports = router;

router.post('/', async (req, res, next) => {
  var email = req.body.email;
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;

  var obj = {
    to: 'jsebifranco2017@gmail.com',
    subject: 'CONTACTO WEB', 
    html: `${nombre} ${apellido} se contacto a a través de la web y quiere más información a este correo : ${email}`};

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj);

  res.render('registro', {
    message: 'Mensaje enviado correctamente'
  });
});