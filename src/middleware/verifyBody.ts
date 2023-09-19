import { NextFunction, Request, Response } from "express"
import { z } from "zod"

const verifyBody =
  (schema: z.AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {

    const body = schema.parse(req.body)

    res.locals = { ...res.locals, body }

    return next()
  }

export default verifyBody