
const connection = require('../database/connection');

module.exports = {
    async index (Request,Response){
        // esquema de paginação
        const { page = 1} = Request.query;

        const [count] = await connection('incidents').count();
        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1)*5)
        .select(['incidents.*',
         'ongs.name',
         'ongs.email',
         'ongs.whatsapp',
         'ongs.city',
         'ongs.city'
        ]);

        Response.header('X-Total-Count', count['count(*)']);

        return Response.json(incidents);
    },

    async create(Request, Response) {
        const { title, description, value } = Request.body;
        
        //acesso ao cabeçalho da requisição. Normalmente autenticação de usuario, localização, o que caracteriza o contexto da requisição
        const ong_id = Request.headers.authorization;

        //retornar um resultado de um registro, array de posição unica
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        //com chaves para o front-end saber que isto é um ID
        return Response.json({ id });
    },

    async delete(Request,Response) {
        const {id} = Request.params;
        const ong_id = Request.headers.authorization;
        
        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();

        if (incident.ong_id !== ong_id){
            return Response.status(401).json({ error: 'Operation not permited'});
        }

        await connection('incidents').where('id', id).delete();

        return Response.status(204).send();
    }

};