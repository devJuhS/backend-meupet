const connection = require('./connection');

/*Consultando os dados com array*/
const getAll = async () => {
    const [tasks] =  await connection.execute('SELECT * FROM produto');
    return tasks;

};



/*Cadastrando  de usuarios */
// const createUser =async (task) =>{
//     const {title} = task;

//     const dateUTc = new Date(Date.now()).toUTCString();
    
//     const query = 'INSERT INTO cliente(id_cliente, nome_cliente, cpf_cliente, email_cliente, cel_cliente, genero_cliente, dt_nasc_cliente) VALUES (?, ?, ?, ?, ?, ?, ?)';


//     const createdUser = await connection.execute(query[title]);

//     return createdUser;
// };

module.exports = {
    getAll,
    // createUser,
};