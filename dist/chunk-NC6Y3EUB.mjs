import {
  generateSlug
} from "./chunk-P2GV4LHW.mjs";
import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/create-event.ts
import { z } from "zod";
async function createEvent(app) {
  app.withTypeProvider().post("/events", {
    schema: {
      summary: "Create a new event",
      tags: ["events"],
      body: z.object({
        //detalhando os erros de cada validação que colocamos. geralmente é message pra maioria
        //no caso abaixo, só é invalid_type_error porque tem duas validações. o titulo é obrigatorio e precisa ser texto 
        //title: z.string( { invalid_type_error: 'O título precisaa ser um texto!'} ).min(4, {message: 'O título precisa te no mínimo 4 caracteres'}),
        //mas, geralmente nao se detalha assim na API e sim no front-end
        title: z.string().min(4),
        details: z.string().nullable(),
        maximumAttendees: z.number().int().positive().nullable()
      }),
      response: {
        201: z.object({
          eventId: z.string().uuid()
        })
      }
    }
  }, async (request, reply) => {
    const {
      title,
      details,
      maximumAttendees
    } = request.body;
    const slug = generateSlug(title);
    const eventWithSameSlug = await prisma.event.findUnique({
      where: {
        slug
      }
    });
    if (eventWithSameSlug) {
      throw new BadRequest("Another event with same title already exists. ");
    }
    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAttendees,
        slug
      }
    });
    return reply.status(201).send({ eventId: event.id });
  });
}

export {
  createEvent
};
