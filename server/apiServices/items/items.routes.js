const express = require('express')
const {createItem,getAllItems, getItems, updateItem, deleteItem} = require('./items.controller')

const itemRouter = express.Router()


itemRouter.get('/', getAllItems)
itemRouter.get('/:id', getItems)
itemRouter.post('/', createItem)
itemRouter.put('/:id', updateItem)
itemRouter.delete('/:id', deleteItem)

module.exports = {itemRouter}

