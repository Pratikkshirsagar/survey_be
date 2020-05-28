const express = require('express');
const mongoose = require('mongoose');
const Keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(Keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
