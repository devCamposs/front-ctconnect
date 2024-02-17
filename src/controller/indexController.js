/*
-------------------------------------------------------------------------
NOME..: indexConroller.js
LANG..: nodeJS
TITULO: Modulo controller da página index
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

const indexController = {
    index: (req, res) => {
        res.render('index')
    }
}

module.exports = indexController