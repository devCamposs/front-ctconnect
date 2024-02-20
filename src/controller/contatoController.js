/*
-------------------------------------------------------------------------
NOME..: contatoController.js
LANG..: nodeJS
TITULO: Modulo controller da página contato
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

const contatoConroller = {
    index: (req, res) => {
        res.render('contato')
    }
}

module.exports = contatoConroller