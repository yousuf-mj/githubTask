import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    dateSearched: {
        type: Date,
    },
});

const UserModel = model("User", UserSchema);
export { UserModel };
