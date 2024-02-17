/*
-------------------------------------------------------------------------
NOME..: app.js
LANG..: nodeJS
TITULO: Modulo que estarta o programa front-end site da CTConnect+
DATA..: 17/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
17/02/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/

const express = require('express');
const path = require('path')
const app = express()

const indexRouter = require('./routes/index')
const socialMidiaRouter = require('./routes/socialMidia')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public'))) 
app.set('view engine', 'ejs')

app.use('/home', indexRouter)
app.use('/socialMidia', socialMidiaRouter)

app.listen(Number(process.env.PORT) || 3333, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 3333');
  });
  
module.exports = app