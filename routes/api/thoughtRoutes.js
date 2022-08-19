const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtControllers')

router.route('/').get(getAllThoughts).post(createThought)

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought)

router.route('/:id/reactions').post(addReaction).delete(deleteReaction)

module.exports = router