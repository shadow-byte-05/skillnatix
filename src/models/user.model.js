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
        default:'',
    },
    gitHubLink:{
        type: String
    },
    linkedInLink:{
        type: String
    },
    
    role: { 
        type: String, 
        enum: ['user', 'admin'], 
        default: 'user' 
    },
    image:{
        type:String,
    },
    bio: {
        type: String
    },
    location: {
        type:String,
    },

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

export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)

