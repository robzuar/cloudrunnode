const app = require('../app');

async function main () {
    app.listen(process.env.PORT);
    console.log('server on running on port : ' + process.env.PORT);
}

main();

//app.listen( 3000, () => { console.log('server on port 3000 ') } );