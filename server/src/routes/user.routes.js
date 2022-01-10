/*
const Router =require('express')
const router =new Router()

const userController=require('../controllers/user.controller')

router.post('/user',userController.createUser)
router.get('/user/:id',userController.getOneUser)
router.get('/user',userController.getUsers)
router.put('/user',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)

module.exports = router*/
const express =require('express')
const router =express.Router()

const userController=require('../controllers/user.controller')

router.post('/user',userController.createUser)
// router.get('/user/:id',userController.getOneUser)
// router.get('/user',userController.getUsers)
// router.put('/user',userController.updateUser)
// router.delete('/user/:id',userController.deleteUser)

module.exports = router