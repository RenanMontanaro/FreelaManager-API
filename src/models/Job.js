const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    workType: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

JobSchema.plugin(mongoosePaginate)

mongoose.model('Job', JobSchema);