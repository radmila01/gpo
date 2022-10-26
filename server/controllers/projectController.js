
const {Project} = require('../models/models')
const ApiError = require('../error/apiError');


class projectController {

    async create (req,res){
        const {name} = req.body
        const project = await Project.create({name: name})
        return res.json(project)
    }

  async getAll (req,res){
        const projects = await Project.findAll()
      return res.json(projects)
  }
    async getOne(req, res) {
        const {id} = req.params
        const project = await Project.findOne(
            {where: {id}},
        )
        return res.json(project)
    }
}

module.exports = new projectController()