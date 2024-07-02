const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors')
const path = require('path');
const router = require('./routes/router');
const PORT = process.env.PORT || 19006;
app.use(express.json());
app.use(cors());


app.set('view engine', 'ejs');

// Thiết lập đường dẫn cho thư mục chứa các file EJS
app.set('views', path.join(__dirname, 'views'));

app.use('/api',router)



// Start the server
app.listen(PORT , () => {
  console.log('Server started on port ' + PORT);
});
