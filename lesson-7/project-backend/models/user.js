import {Schema, model} from "mongoose";

import { handleSaveError, runValidateAtUpdate } from "./hooks.js";

import { emailRegexp } from "../constants/user-contansts.js";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: emailRegexp,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
}, {versionKey: false, timestamps: true});

userSchema.pre("findOneAndUpdate", runValidateAtUpdate);

userSchema.post("save", handleSaveError);
userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;