const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.zpt6fzj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    nome: String,
    senha: String,
});

const FuncModel = mongoose.model('FuncModel', UserSchema);

module.exports = {
    FuncModel,
};