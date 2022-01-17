const Mythology = require('./mythology.model')
const { setError } = require('../../utils/error/error')
const { deleteFile } = require('../../middlewares/deleteFile')


// const postNewMythology = async (req, res, next) => {
//     try {
//         const newMythology = new Mythology()
//         newMythology.name = req.body.name
//         newMythology.planets = req.body.planets
//         if (req.file) {
//             newMythology.img = req.file.path
//         }
//         const mythologyDB = await newMythology.save()
//         return res.status(201).json(mythologyDB)
//     } catch (error) {
//         return next(setError(500, 'Mythology not saved'))
//     }
// }

const getAllMythologies = async (req, res, next) => {
    try {
        const mythologiesDB = await Mythology.find()
        res.status(200).json(mythologiesDB)
    } catch (error) {
        return next(setError(500, 'Mythology failed server'))
    }
}

const getMythology = async (req, res, next) => {
    try {
        const { id } = req.params
        const mythologyDB = await Mythology.findById(id).populate('planets')
        if (!mythologyDB) {
            return next(setError(404, 'Mythology not found'))
        }
        return res.status(200).json(mythologyDB)
    } catch (error) {
        return next(setError(500, 'Mythology server error'))
    }
}

 
// const deleteMythology = async (req, res, next) => {
//     try {
//         const { id } = req.params
//         const mythologyDB = await Mythology.findByIdAndDelete(id)
//         if (!mythologyDB) {
//             return next(setError(404, 'Mythology not found'))
//         }
//         if (mythologyDB.img) deleteFile(mythologyDB.img)
//         return res.status(200).json(mythologyDB)
//     } catch (error) {
//         return next(setError(500, 'Mythology removed server error'))
//     }
// }

module.exports = {
    // postNewMythology,
    getAllMythologies,
    getMythology,
    // deleteMythology
}
