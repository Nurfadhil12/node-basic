const {hello, world} = require('./Module')

const http = require('http');
const moment = require('moment')

const server = http.createServer ((req, res) => {
    switch(req.url){
        case '/welcome': welcome(res);break;
        case '/': Home(res);break;
        default:Page404(res);break;
    }
    
});

const welcome = res =>{
    res.statusCode =200;
    res.setHeader('content-Type','text/json')
    res.write(JSON.stringify({
        status:'Nur fadhil aminullah',
        message: 'iam single',
        study: 'Nodejs',
        loginAt: moment()
    }));
    res.end(); 
}

const Page404 = res =>{
    res.statusCode =404;
    res.setHeader('content-Type','text/json')
    res.write(JSON.stringify({
        status:'Failed',
        message: 'Not Found',
    }));
    res.end(); 
}
const Home = res =>{    
    res.end('<h1>Home Page</h1>'); 
}

server.listen(3000, () => console.log('server running at http://127.0.0.1:3000'));