/*
-------------------------------------------------------------------------
NOME..: socialMidia.js
LANG..: nodeJS
TITULO: Modulo de roda da página de Social Mídia
DATA..: 17/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
17/02/2024    0      Thomas Campos     Elaboração
18/02/2024    1      Thomas Campos     Adicionado controle de versão
---------------------------------------------------------------------------
*/

const express = require('express');
const router = express.Router();

const socialMidiaController = require('../controller/socialMidiaController');

router.get('/', socialMidiaController.index);

module.exports = router;
