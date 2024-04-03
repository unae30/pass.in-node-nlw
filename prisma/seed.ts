import { prisma } from '../src/lib/prisma'


async function seed(){
    await prisma.event.create({
        data:{
            id: '79b33f42-5e19-4478-a83c-63cd6dab50c8',
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento para devs apaixonados por código!",
            maximumAttendees: 110,
        }
    })
}

seed().then(() => {
    console.group('Database seeded!')
    prisma.$disconnect()
})