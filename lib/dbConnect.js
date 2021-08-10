import mongoose from 'mongoose';

async function dbConnect(url) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('[db] Successfully connected.');
  } catch(err) {
    console.log('[db] Failed to connect! ' + (err));
  }
}

export default dbConnect;