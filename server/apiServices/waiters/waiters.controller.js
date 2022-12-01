const { handleHttpError } = require('../../utils/handleError')
const { Waiter } = require('./waiters.model')

const addWaiter = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body

    const waiterCheck = await Waiter.findOne({ email })

    if (waiterCheck) {
      return handleHttpError(res, "EMAIL_ALREADY_EXIST", 400)
    }

    const newWaiter = new Waiter({
      firstName,
      lastName,
      email,
    })

    newWaiter.save()

    res.status(200).json({
      status: "success",
      newWaiter
    })

  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_WAITER", 500)
  }
}

const getWaiters = async (req, res) => {
  try {
    const waiterList = await Waiter.find()
    res.json(waiterList)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_WAITERS', 500)
  }
}

const deleteWaiter = async (req, res) => {
  try {
    const { id } = req.params
    const waiterID = await Waiter.findOneAndDelete({ _id: id })
    res.json({ waiterID })
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_WAITERS', 500)
  }
}

module.exports = { addWaiter, getWaiters, deleteWaiter }
