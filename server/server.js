const { app } = require("./app")


const PORT = 4000

const startServer = async () => {

  app.listen(PORT, () => {

    console.log("server running on PORT:" + PORT)
  })
}

startServer()