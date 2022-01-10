/*
class UserController {
    async createUser(req, res) {
        console.log('createUser request')
        const {firstName, lastname, email, role} = req.body
        console.log('firstName', firstName,
            'lastname', lastname,
            'email', email,
            'role', role)
        res.sendStatus(200).json('ok')
    }

    async getUsers(req, res) {
        console.log('getUsers request')

    }

    async getOneUser(req, res) {
        console.log('createUser request')

    }

    async updateUser(req, res) {
        console.log('createUser request')

    }

    async deleteUser(req, res) {

    }
}

module.exports = new UserController()*/

module.exports.createUser = async (req, res) => {
    try{
            console.log('createUser request')
            const {firstName, lastname, email, roleId} = req.body
            console.log('firstName', firstName,
                'lastname', lastname,
                'email', email,
                'roleId', roleId)
            res.status(200).json('ok')
    }
    catch (e) {
        console.log('Error', e)
    }
}