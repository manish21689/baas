var mrepository = require('../repository/master')
var Createdata = async (req, res) => {
    const [result, err] = await mrepository.Createdata(req.body);
    //response(result,err);
    if (err) {
        return res.status(400).json("Can not create new records")
    }
    else {
        return res.status(200).json(result);
    }

}

var getAll = async (req, res) => {
    const [result, err] = await mrepository.getAll({});
    
    if (err) {
        return res.status(400).json("Can not Fetch Records")
    }
    else {
        return res.status(200).json(result);
    }

}

var getById = async (req, res) => {
    const [result, err] = await mrepository.getById(req.params.id);
    
    if (err) {
        return res.status(400).json("Can not Fetch Record By Id")
    }
    else {
        return res.status(200).json(result);
    }

}
var updateById = async (req, res) => {
    const [result, err] = await mrepository.updateById(req.body,req.params.id);
    
    if (err) {
        return res.status(400).json("Can not update Records....")
    }
    else {
        console.log(result)
        return res.status(200).json({msg:"Records Updated Successfully"});
    }

}

var deletetById = async (req, res) => {
    const [result, err] = await mrepository.deletetById(req.params.id);
    
    if (err) {
        return res.status(400).json("Can not Delete Records")
    }
    else {
        return res.status(200).json(result);
    }

}

const rcounts = async (req, res) => {
    const [result, err] = await mrepository.rcounts()
    
    
    if (err) {
        return res.status(400).json("Error Occured in Counting")
    }
    else {
        return res.status(200).json(result);
    }

}

module.exports = { Createdata, getAll, getById,updateById,deletetById,rcounts }
function response(req, res) {
    if (err) {
        return res.status(400).json("Can not create new records")
    }
    else
        return res.status(200).json(result);
}