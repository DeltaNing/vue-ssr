const serverRender = require('vue-server-renderer');
const server = require('express')();
const path = require('path');
const createApp = require('./dist/server.bundle.js');
console.log(createApp)

let render = serverRender.createRenderer({
    template: require('fs').readFileSync('./index.html', 'utf-8')
});

const context = {
    title: 'Hello Vue SSR',
    meta: `
    <meta name="keywords" content="vue-ssr">
    <meta name="description" content="This is a vue-ssr test app.">
    `,
    script: `
    <script src="/client.bundle.js"></script>
    `
}
// const ctx = {url: '/home'};
// console.log(createApp['default'](ctx))
server.get('/client.bundle.js', (req, res) => {
    res.sendFile(path.resolve('./dist/client.bundle.js'))
})

server.get('*', function(req, res) {
    const ctx = {url: req.url};
    createApp['default'](ctx).then(function (app) {
        render.renderToString(app, context, (err, html) => {
            if (err) {
                
                console.log(err)
            } else {
                res.end(html)
            }
            
        })
    }).catch(err => {
        console.log('server.js line 40:' + JSON.stringify(err))
    })
    
});

server.listen(8000, function() {
    console.log('server is running at http://localhost:8000')
})