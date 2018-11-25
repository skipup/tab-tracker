const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));


app.get('/test',(req,res)=>{
	return res.send({message : 'Hello TabTracker'});
});

app.listen(process.env.PORT || 8081);
