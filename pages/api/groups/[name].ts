import { NextApiRequest, NextApiResponse } from 'next'
import { groupData } from '../../../src/utils/group-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name } = _req.query;
    
    const group = groupData[name as string];

    if (!Array.isArray(group)) {
      res.status(200).json(group)
      return;
    }
    throw new Error(`Cannot find ${name} group data`)

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler