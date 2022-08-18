const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
            // getter method to format timestamp on query
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ],
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema.virtual('friendCount').get(function() {
    return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;