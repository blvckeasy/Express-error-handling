import ApiError from "./ApiError.js"
import { writeErrorFile } from "../utils/writeFile.js"

export default function apiErrorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.code).json({
            code: err.code,
            error: err.message
        })
    }

    writeErrorFile(err, req)

    return res.status(500).json({
        code: 500,
        error: "Internal server error"
    })
}