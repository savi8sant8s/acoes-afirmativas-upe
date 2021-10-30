import type { NextApiRequest, NextApiResponse } from 'next';

type Access = {
    timestamp: Date,
    logged: boolean
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Access>) {
    if (req.method == "POST"){
        res.status(200).json({timestamp: new Date, logged: true});
    }
}
