import mongoose from 'mongoose';

async function connectDb() {
  const uri =
    'mongodb+srv://dev_dr:4atqTTK4VvV9PgCe@favsapi.cvzavvm.mongodb.net/?retryWrites=true&w=majority';

  try {
    await mongoose.connect(uri);
    console.log('Connected to database');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectDb;
