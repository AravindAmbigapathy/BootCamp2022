let mongoose=require('mongoose')

let Schema=mongoose.Schema;

let BookSchema=new Schema({
    title:String,
    publ:{
        type:String,
        required:true,
        unique:true
    },
    keyword:Array,
    publi:Boolean,
    author:{
        type:Schema.ObjectId,
        ref:"User"
    }
})



console.log(BookSchema);

const Book=mongoose.model('Book',BookSchema)

const Elon=new Book({title:"Elon Musk",keyword:[12,34,45]})




