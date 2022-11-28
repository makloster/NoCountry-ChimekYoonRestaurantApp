const {itemCreated} = require('./items.model')
const {handleHttpError} = require('../../utils/handleError')

const createItem = async (req, res) => {
    try {
        const {name, price, description} = req.body

        const item = new itemCreated({
            name,
            price,
            description
        })

        await item.save()

        res.status(200).json({
            message: 'Item created',
            item
        })


    } catch (error) {
        handleHttpError(res,'ERROR_CREATE_ITEM', 500)
    }
}

const getAllItems = async (req, res) => {
    try {
        const getItems = await itemCreated.find()

        res.status(200).json(
            getItems
        )
        
    } catch (error) {
        handleHttpError(res,'ERROR_GET_ITEMS', 500)
    }
}

const getItems = async(req,res) =>{
    try {
        const {id} = req.params

        const getId = await itemCreated.findById({
            _id: id
        })

        if(!getId){
            return res.status(404).json({
                message: 'Item not found'
              })
        }

        res.status(200).json({
            message: 'Item found',
            getId
          })
        
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM', 500)
    }
}

const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        const {name, price, description} = req.body

        const item = await itemCreated.findByIdAndUpdate(
            id,
            {name, price, description}
        )

        if(!item){
            handleHttpError(res,'ITEM_NOT_FOUND')
        }

        await item.save()

        res.status(200).json({
            message: 'Item updated',
            newdata: {name, price, description},
            item
        })

    } catch (error) {
        handleHttpError(res,'ERROR_UPDATE_ITEM', 500)
    }
}

const deleteItem = async (req, res) => {
    try {
        const {id} = req.params

        const item = await itemCreated.findByIdAndDelete(id)

        if(!item){
            handleHttpError(res,'ITEM_NOT_FOUND')
        }

        res.status(200).json({
            message: 'Item deleted',
            id
        })

    } catch (error) {
        handleHttpError(res, 'ERROR_DELETE_ITEM', 500)
    }
}


module.exports = {createItem, getAllItems, getItems, updateItem, deleteItem}