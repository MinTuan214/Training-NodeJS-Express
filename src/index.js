const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')

const app = express();
const port = 3000;

const db = require('./config/db');
const route = require('./routes');

db.connect();

app.use(methodOverride('_method'));
app.engine('.hbs', engine({ extname: '.hbs',
                            helpers:{
                              sum: (a, b) => a + b
                            } 
                          }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.urlencoded());
app.use(express.json());

route(app)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})