const { JSONStorage } = require('../');

let db = new JSONStorage('./test.json');

let obj = {
    "name":"ben",
    "profile":false
}
db.write({'foo':obj}).then(()=>{
    console.log('wrote data!');
    db.read(['foo']).then((val) => console.log('got foo', val));
});
