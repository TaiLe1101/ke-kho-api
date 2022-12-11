const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('☑️ Connect success database!!!');
  } catch (err) {
    console.log('❗ Connect failed database!!!');
  }
}

module.exports = { connectDatabase };
