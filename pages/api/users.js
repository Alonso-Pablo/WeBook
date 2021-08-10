import dbConnect from '../../lib/dbConnect'
import userModel from '../../model/userModel';


export default async function handler(req, res) {
  const { method } = req

  dbConnect(process.env.MONGO_URI)

  if (method === 'GET') {
    try {
      const users = await userModel.find();
      res.status(200).send({ 'success': true, 'data': users, 'error': '' });
    } catch (e) {
      console.error(e);
      res.status(400).send({ 'success': false });
    }
  } else {
    res.status(404).send({ 'success': false });
  }

}

