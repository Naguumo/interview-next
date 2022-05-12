import { NextApiHandler } from 'next'
import { parseString } from '@fast-csv/parse'
import { BugsDataType } from '@lib/agora/useBugsData'
import axios from 'axios'

const storageUrl = 'https://json.extendsclass.com/bin/56b3c6de1240'

const saveFile = (text: string) => {
  const bugsData: BugsDataType = []
  parseString(text, { headers: true })
    .on('data', (row) => {
      bugsData.push(row)
    })
    .on('end', () => {
      axios(storageUrl, {
        method: 'put',
        headers: {
          'Security-key': 'ishaan-interviews-agora',
        },
        data: bugsData,
      })
    })
}

const handler: NextApiHandler = async ({ method, body }, res) => {
  switch (method) {
    case 'GET':
      const { data } = await axios.get<BugsDataType>(storageUrl)
      res.status(200).json(data)
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
