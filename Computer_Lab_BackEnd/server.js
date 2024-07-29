const pool = require('./config/db');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/student', require('./routes/studentLoginRoute'));
app.use('/api/issues', require('./routes/issuesRoute'));
app.use('/api/admin', require('./routes/adminLoginRoute'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));