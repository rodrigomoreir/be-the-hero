const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //rota pra listar todas as ongs do banco de dados
    async index(Request,Response) {
        //selecionar todos os campos da tabela ongs
        const ongs = await connection('ongs').select('*');
    
        return Response.json(ongs);
    },

    async create(Request, Response) {
        const {name,email,whatsapp,city,uf} = Request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        // quando chegar a esse codigo, ele vai aguardar o codigo finalizar para continuar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        // devolução de resposta para o cliente
        return Response.json({ id });
    }
};