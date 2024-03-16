/*
-------------------------------------------------------------------------
NOME..: discadoraa.js
LANG..: nodeJS
TITULO: Modulo de roda da página de discagem simuntanea
DATA..: 17/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
17/02/2024    0      Thomas Campos     Elaboração
18/02/2024    1      Thomas Campos     Adicionado controle de versão
16/03/2024    2      Thomas Campos     Alterado rota para discadora
---------------------------------------------------------------------------
*/

const express = require('express');
const router = express.Router();

const discadoraController = require('../controller/discadoraController');

router.get('/', discadoraController.index);

module.exports = router;
