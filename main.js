/**
 * Created by tigra on 25-Dec-18.
 */
const app = require("./app");
const port = 3000;

app.use('/', require('./routes/index'));

app.listen(port, ()=> console.log('Server running ...'));