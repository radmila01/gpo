
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

}

module.exports = new projectController()