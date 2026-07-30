import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

        username:{
            type:String,
            required: true,
            unique:true,
            lowercase:true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
            lowercase:true,
        },

        password:{
            type:String,
            required:[true , 'Password is Required'],
        },

        refreshToken:{
            type:String,
            default: ""
        }

    },
    {
        timestamps:true
    }
);

userSchema.pre("save", async function() {
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}



export const User = mongoose.model("User" ,userSchema)