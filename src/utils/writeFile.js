import Fs from 'fs'
import Path from 'path'
import dateFormat from './dateFormat.js'

function writeErrorFile (error, req) {
  const data = `
  method: \"${req.method}\"
  url: \"${req.url}\"
  date: \"${new Date()}\"
  error: \"${error}\"
  ----------------------------------------------------------------------------------------`
  Fs.appendFileSync(Path.join(process.cwd(), 'src', 'error', 'logs', `${dateFormat()}.log`), data)
}


export {
  writeErrorFile
}