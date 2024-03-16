/*
-------------------------------------------------------------------------
NOME..: sms.js
LANG..: nodeJS
TITULO: Modulo de roda da página de sms
DATA..: 18/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
18/02/2024    0      Thomas Campos     Elaboração
16/03/2024    1      Thomas Campos     Alterado rota para smsController
---------------------------------------------------------------------------
*/

const express = require('express');
const router = express.Router();

const smsController = require('../controller/smsController');

router.get('/', smsController.index);

module.exports = router;