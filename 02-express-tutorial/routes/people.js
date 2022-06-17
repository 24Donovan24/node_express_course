const express = require('express')
const router = express.Router()

const {
createPerson,
createPersonPostman,
updatePerson,
deletePerson,
getPeople
} = require('../controllers/people')

// let {people} =  require('../data')

// router.get('/', (req, res) => { //Grouping requests of same routes according to their requests types
//     res.status(200).json({success:true,data:people})
// })

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson) //Another way of setting up routes like above
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router