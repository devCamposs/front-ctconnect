/*
-------------------------------------------------------------------------
NOME..: idVisualController.js
LANG..: nodeJS
TITULO: Modulo controller da página Identidade Visual
DATA..: 18/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
18/02/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/

const path = require('path')

const socialMidiaConroller = {
    index: (req, res) => {
        res.render('idVisual')
    }
}

module.exports = socialMidiaConroller