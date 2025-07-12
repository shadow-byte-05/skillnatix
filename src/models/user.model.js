import mongoose, {Schema} from 'mongoose'

const UserSchema = new Schema({
    fullName: { 
        type: String,
        trim:true, 
    },
    email:    { 
        type: String, 
        required: true, 
        trim:true,
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    
    role: { 
        type: String, 
        enum: ['user', 'admin'], 
        default: 'user' 
    },
    profileImage: String,
    bio: String,
    location: String,

    credits: { 
        type: Number, 
        default: 100 
    },
    level: { 
        type: String, 
        enum: ['Beginner', 'Intermediate', 'Expert'], 
        default: 'Beginner' 
    },

    offeredSkills: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill' 
            }
        ],
    enrolledSkills: [
        { type: mongoose.Schema.Types.ObjectId, 
            ref: 'Skill' 
        }
    ],

    badges: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Badge' 
        }
    ],

    rating: { 
        type: Number, 
        default: 0 
    },
    reviewCount: { 
        type: Number, 
        default: 0 
    },
    }, 
    { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model('User', UserSchema)

