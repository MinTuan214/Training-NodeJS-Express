const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');

class UserController{
    edit(req, res, next){
        User.findById(req.params.id)
        .then(user => res.render('users/edit',{
            user: mongooseToObject(user)
        }))
        .catch(next)
    }
    update(req, res, next){
        User.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/'))
        .catch(next)
    }

    store(req, res, next){
        const user = new User(req.body);
        user.save()
        .then(()=>{
            res.redirect('/')
        })
        .catch(next)
    }

    delete(req, res, next){
        User.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }
}

module.exports = new UserController;