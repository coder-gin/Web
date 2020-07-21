const mongoose = require('mongoose');
const DB_URL = 'localhost:27017';
const DB_NAME = 'test';
mongoose.set('useCreateIndex', true);
mongoose
    .connect(`mongodb://${DB_URL}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log('数据库连接失败', err));
