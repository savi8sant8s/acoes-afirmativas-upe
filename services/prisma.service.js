import { PrismaClient } from '@prisma/client'

// See here: https://github.com/prisma/prisma-client-js/issues/228#issuecomment-618433162
let prisma

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient()
}
else {
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}

	prisma = global.prisma
}

export default prisma;