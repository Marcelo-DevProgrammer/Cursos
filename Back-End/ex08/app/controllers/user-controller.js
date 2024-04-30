const list = (req,res => {
    return res.status(200).json({nome: "Marcelo", sobrenome: 'Almeida'});
})
const create  = (req,res => {
    console.log(request.query);
    console.log(request)
    return res.status(201).json({nome: "Marcelo", sobrenome: 'Almeida'});
})

module.exports = {list, create};