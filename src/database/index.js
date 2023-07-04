const { Client } = require('pg'); // Requisitando o pg instalado pelo yarn
const { rows } = require('pg/lib/defaults');

const client = new Client({ // desistruturando as infos de login do pg.
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts',
});

client.connect();
// executar src/database/index.js para testar conexão com banco de dados.

exports.query = async (query) => {
    const { rows } = await client.query(query);
    return rows;
}

Query('SELECT * FROM contacts').then(console.log);