const jsonServer = require('json-server')

const args = process.argv;

const server = jsonServer.create()
const router = jsonServer.router(getArgOrDefault(args, '--watch', 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use((req, res, next) => {
    if (Math.random() > 0.8) {
        return res.sendStatus(500);
    }
    next();
})
server.use(router)

server.listen(getArgOrDefault(args, '--port', '3000'), () => {
    console.log('JSON Server is running')
})

function getArgOrDefault(args, key, defaultValue) {
    return args[args.findIndex(val => val === key) + 1] || defaultValue;
}