import mongoose, {Schema} from "mongoose"

const skillSchema = new Schema(
    {
        title: { 
            type: String, 
            required: true 
        },
        description: String,
        category: String,
        tags: [String],

        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        isActive: { 
            type: Boolean, 
            default: true 
        },

        avgRating: { 
            type: Number, 
            default: 0 
        },
        learnersCount: { 
            type: Number, 
            default: 0 
        },
        sessionsCount: { 
            type: Number, 
            default: 0 
        },
    },
    { 
        timestamps: true 
    }
)

const Skill = mongoose.models.Skill || mongoose.model('Skill',skillSchema)