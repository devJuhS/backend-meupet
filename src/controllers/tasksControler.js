const tasksModel = require('../models/tasksModel');

/*Retorna listar tarefas */
const  getAll =  async(_request, response)=> {
    const tasks =  await tasksModel.getAll();
    return response.status(200).json(tasks);

};

/*retorna cadastro */
// const createUser = async(request, response) => {
//     const createdUser = await tasksModel.createUser(request.body);

//     return response.status(201).json(createdUser);
// };


module.exports = {
    getAll
    // createUser
};