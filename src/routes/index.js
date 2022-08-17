import Fs from 'fs'
import Path from 'path'
import Url from 'url'

const homedir = Path.resolve()

export default function (app) {
  // Get Router and run || Custom GLOB collector
  return new Promise((resolve, reject) => {
    const routerDirectory = Path.join(homedir, 'src', 'routes')
    Fs.readdir(routerDirectory, async (err, routeFiles) => {
      if (err) throw new Error('Routes path not found')

      for await (let routeName of routeFiles) {
        const routeFile = Path.join(homedir, 'src', 'routes', routeName)
        const route = await import(Url.pathToFileURL(routeFile).href)
        if (route.default.path && route.default.router) {
          app.use('/api/v1' + route.default.path, route.default.router)
        }
      }
      resolve(200)
    })
  })
}
