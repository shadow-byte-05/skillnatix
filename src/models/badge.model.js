import mongoose from 'mongoose'

const badgeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: String,
        icon: String,

        criteria: {
            type: String,
            enum: [
                'sessions_completed',
                'skills_shared',
                'high_rating',
                'early_user',
            ],
            required: true,
        },
        threshold: { type: Number, required: true }, 
        level: {
            type: String,
            enum: ['Bronze', 'Silver', 'Gold'],
            default: 'Bronze',
        },
    },
    { 
        timestamps: true 
    }
)

export default mongoose.model('Badge', badgeSchema)
