import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema(
    {
        skill: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
            required: true,
        },
        mentor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        learner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        scheduledAt: { 
            type: Date, 
            required: true 
        },
        durationMinutes: { 
            type: Number, 
            default: 60 
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'completed', 'cancelled'],
            default: 'pending',
        },

        creditsCharged: { 
            type: Number, 
            required: true 
        },
        mentorReview: {
            rating: Number,
            comment: String,
        },
        learnerReview: {
            rating: Number,
            comment: String,
        },
    },
    { timestamps: true }
)

sessionSchema.index({ mentor: 1, learner: 1, scheduledAt: -1 })


export const SessionModel = mongoose.models.Session ||  mongoose.model('Session', sessionSchema)
