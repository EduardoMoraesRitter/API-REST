let Schema = mongoose.Schema;

let clientSchema = new Schema({
        apelido: String,
        Email: String,
});

let clienteModel = mongoose.model('cliente', clientSchema, 'cliente');

module.exports = clienteModel;