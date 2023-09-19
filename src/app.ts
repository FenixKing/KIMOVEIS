import "reflect-metadata"
import "express-async-errors"
import express from "express"

import { userRouter, categoryRouter, authRouter, realEstateRouter, scheduleRouter } from "./router"
import { errorHandler } from "./errors"

const app = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/categories', categoryRouter)
app.use('/login', authRouter)
app.use('/realEstate', realEstateRouter)
app.use('/schedules', scheduleRouter)

app.use(errorHandler)

export default app
