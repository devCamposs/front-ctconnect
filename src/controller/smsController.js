/*
-------------------------------------------------------------------------
NOME..: smsController.js
LANG..: nodeJS
TITULO: Modulo controller da página sms
DATA..: 18/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
18/02/2024    0      Thomas Campos     Elaboração
16/03/2024    1      Thomas Campos     Variavel e rota alterada para serviço
                                       de sms.
---------------------------------------------------------------------------
*/

const path = require('path')

const socialMidiaConroller = {
    index: (req, res) => {
        res.render('sms')
    }
}

module.exports = socialMidiaConroller