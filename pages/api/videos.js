import nextConnect from 'next-connect';
import middleware from '../../middlewares';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { name } = req.body;
  const videos = await req.db
    .collection('videos')
    .find({ ...(name ? { name } : {}) })
    .toArray();

  return res.status(201).send({ status: 'ok', videos });
});

export default handler;
