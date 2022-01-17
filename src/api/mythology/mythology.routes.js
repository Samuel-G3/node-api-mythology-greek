const MythologyRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const { postNewMythology, getAllMythologies, getMythology, patchMythology, deleteMythology} = require('./mythology.controller')


MythologyRoutes.get('/', getAllMythologies)
MythologyRoutes.get('/:id', getMythology)
// MythologyRoutes.post('/', [isAuth], upload.single('img'), postNewMythology)
// MythologyRoutes.patch('/:id', [isAuth], upload.single('img'), patchMythology)
// MythologyRoutes.delete('/:id', [isAuth], upload.single('img'), deleteMythology)

module.exports = MythologyRoutes