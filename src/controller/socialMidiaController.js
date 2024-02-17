/*
-------------------------------------------------------------------------
NOME..: socialMidiaConroller.js
LANG..: nodeJS
TITULO: Modulo controller da página social mídia
DATA..: 17/02/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
17/02/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/

const path = require('path')

const socialMidiaConroller = {
    index: (req, res) => {
        res.render('socialMidia')
    }
}

module.exports = socialMidiaConroller