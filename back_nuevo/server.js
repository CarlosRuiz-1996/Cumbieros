require('module-alias/register');

const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());

const host = '127.0.0.1';
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => 
  res.send('NodeJS Works')
);


const documentRoutes = require('@routes/document.routes');
const userRoutes = require('@routes/users.routes');
const loginRoutes = require('@routes/login.routes');



app.use('/api/documents', documentRoutes);
app.use('/api/user', userRoutes);
app.use('/api/login', loginRoutes);



app.listen(port, host, () => 
  console.log(`Server is listening on port ${port}`)
);