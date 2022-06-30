var Master = require('../models/master');
const Createdata = async (data) => {
    try {
        const result = await Master.create(data);
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getAll = async () => {
    try {
        const result = await Master.findAll();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getById = async (id) => {
    try {
        const result = await Master.findAll({where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}

const updateById = async (data,id) => {
    try {
        const result = await Master.update(data,{where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const deletetById = async (id) => {
    try {
        const result = await Master.destroy({where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const rcounts = async () => {
    try {
        const result = await Master.count();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
module.exports={Createdata,getAll,getById,updateById,deletetById,
                rcounts}