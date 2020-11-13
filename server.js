const express = require('express');
const cors = require('cors');//2

const app = express();

require('./server/config/mongoose.config'); //3

app.use(cors()); //2

app.use(express.json()) //3
app.use(express.urlencoded({extended: true})) //3

require('./server/routes/product.routes')(app); //1
app.listen(8000, () => {
    console.log("Listening at Port 8000")
});