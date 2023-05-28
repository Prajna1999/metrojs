let express = require('./src/server')
const app = express()

app.get('/', (req, res) => {
    res.writeHead(200)
    res.write('Hello world from /');
    res.end();
});


app.get('/2', (req, res) => {
    res.writeHead(200)
    res.write('Hello world from /2');
    res.end();
});

app.post('/post',(req,res) => {
    res.writeHead(200)
    res.write('Data from post :)');
    res.end();
})
const PORT=3000||undefined
app.listen(PORT, () => console.log('Example app listening on port '+ PORT))