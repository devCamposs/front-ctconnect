/*
-------------------------------------------------------------------------
NOME..: idVisual.js
LANG..: nodeJS
TITULO: Modulo de roda da página de identidade visual
DATA..: 18/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
18/02/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/

const express = require('express');
const router = express.Router();

const idVisualController = require('../controller/idVisualController');

router.get('/', idVisualController.index);

module.exports = router;