import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
    mental_health_score: {
        type:Number
    },

    physical_health_score: {
        type:Number
    },

    Aerage:{
        type:Number
    }
});

const User = mongoose.model('User', UserSchema);

export default User;
