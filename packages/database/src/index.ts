// import { PrismaClient } from '../generated/prisma'
// import { withAccelerate } from '@prisma/extension-accelerate'

import { PrismaClient } from '@prisma/client'
import { S3Client } from '@aws-sdk/client-s3'

const globalForDatabase = global as unknown as {
  prisma: PrismaClient
  s3: S3Client
}

const s3 =
  globalForDatabase.s3 ||
  new S3Client({
    endpoint: process.env.S3_ENDPOINT,
    apiVersion: 'v4',
    forcePathStyle: true,
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.S3_USERNAME!,
      secretAccessKey: process.env.S3_PASSWORD!
    }
  })

const prisma = globalForDatabase.prisma || new PrismaClient()

export { s3 }
export default prisma

if (process.env.NODE_ENV !== 'production') globalForDatabase.prisma = prisma
if (process.env.NODE_ENV !== 'production') globalForDatabase.s3 = s3

// export * from '../generated/prisma'
export * from '@aws-sdk/client-s3'
export * from '@prisma/client'
