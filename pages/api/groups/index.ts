  
import { NextApiRequest, NextApiResponse } from 'next'
import { groupData } from '../../../src/utils/group-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (Array.isArray(groupData)) {
      throw new Error(`Cannot find groups data`)
    }

    res.status(200).json(groupData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler