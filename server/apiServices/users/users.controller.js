const {userCreated} = require('./users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {handleHttpError} = require('../../utils/handleError')

const create = async (req, res) => {
    try {
        const {username, password, email} = req.body

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt,);

        const user = await userCreated.findOne({email})
        
        
        if(user) {
        return handleHttpError(res,"EMAIL_ALREADY_EXIST", 400)
        }
      
        const newUser = new userCreated({
        username,
        email,
        password: hashPassword,    
        });

        newUser.save()

    
        res.status(200).json({
        status: "success",
        newUser
        })
    
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_USER", 500)
    }
}


const login = async (req,res) => {

    try {

        const { username, password } = req.body;

    
        const user = await userCreated.find({
            username
        })


        if (!user) {
            return handleHttpError(res, "USER_&_PASSWORD ARE NOT VALID", 400);
        }

        const passOkay = await bcrypt.compare(password, user[0].password)
        
        if (!passOkay) {
            return handleHttpError(res, "USER_&_PASSWORD ARE NOT VALID", 400);
        }

        const token = jwt.sign(
            {
                id: user.id
            },
            process.env.PWD,
            {
                expiresIn:"1d"
            }
            )
            
        res.status(200).json({
            token
        })
        
    } catch (error) {
        handleHttpError(res, 'ERROR_LOGIN', 500)
    }
}

module.exports = {create, login}





