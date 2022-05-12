// import { readFileSync, writeFileSync } from 'fs'
// import { resolve } from 'path'
import { NextApiHandler } from 'next'
import { parseString } from '@fast-csv/parse'
import { BugsDataType } from '@lib/agora/useBugsData'

// const fileLocation = resolve('./files/bugData.json')
// TODO: Remove
let tempStorage = ''

const saveFile = (text: string) => {
  const bugsData: BugsDataType = []
  parseString(text, { headers: true })
    .on('data', (row) => {
      bugsData.push(row)
    })
    .on('end', () => {
      // TODO: Save to file bucket
      // writeFileSync(fileLocation, JSON.stringify(bugsData, undefined, 1))
      tempStorage = JSON.stringify(bugsData, undefined, 1)
      console.log('Saving file...', JSON.stringify(bugsData, undefined, 1))
    })
}

const handler: NextApiHandler = ({ method, body }, res) => {
  switch (method) {
    case 'GET':
      // TODO: Read from file bucket
      // const file = readFileSync(fileLocation, { encoding: 'utf8' })
      const file = tempStorage
      res.status(200).json(file)
      break
    case 'POST':
      saveFile(body)
      res.status(200).end()
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}

export default handler
