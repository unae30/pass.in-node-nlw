import { FastifyInstance } from 'fastify'
import { BadRequest } from './routes/_errors/bad-request'
import { ZodError } from 'zod'

//consertando código de erro para 400

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, reuest, reply) => {

    if(error instanceof ZodError){
        return reply.status(400).send({
            message: 'Error during validation!',
            errors: error.flatten().fieldErrors,
        })
    }

    if (error instanceof BadRequest) {
        return reply.status(400).send({ message: error.message })
    }

    return reply.status(500).send({ message: 'Internal Server Error' })
}
