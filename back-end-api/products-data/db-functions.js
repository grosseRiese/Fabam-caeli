const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./products-data/coffeemenu.json');
const db = low(adapter);

const initDatabase=()=>{
  //Check if products exists...NOT Allow to duplicate db...
  let count = 1;
    db.has('coffeemenu').value()
      ? (console.log(`Already have this database ...!`) )
      : ( db.defaults({ coffeemenu: [{'id':count,'title':'','desc':'','price':0}],orders:[],count:0}).write(),
      console.log('New DB has been created ... ') );
}
//initDatabase();


 //all products in db.
  /*let wholeCoffeeMenu = ()=>{
    return db.get('coffeemenu').value();
  }*/

module.exports = { db };