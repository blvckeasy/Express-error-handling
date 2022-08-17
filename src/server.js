// import packages from node_modules
import Express from 'express'
import DotEnv from 'dotenv'

// import files from src
import apiErrorHandler from './error/api-error-handler.js'
import Routes from './routes/index.js'

async function main() {
  try {
    const app = Express()
    const PORT = process.env.PORT || 8080
    
    DotEnv.config()
    
    app.use(Express.json())

    // set main path to routes
    await Routes(app)
    
    // use route error handler
    app.use(apiErrorHandler)

    app.get('/', (req, res) => {
      res.json({
          "Project name": "Error Handler",
          "version": "1.0.0^development",
          "author": "github.com/blvckeasy"
      })
  })

    app.listen(PORT, () => console.log(`🚀 SERVER READY @ http://localhost:${PORT}`))
  } catch (error) {
    // if something wrong in the server it logs an error
    console.log("SERVER_ERROR:", error);
  }
}

main()