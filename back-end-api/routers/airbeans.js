const {Router} = require('express');
const { NULL } = require('node-sass');
const router = new Router();
const { v4: uuidv4 } = require('uuid');
const { generateOrderNumber,totalPrice,createETA} = require('../helpers/help.js');
// Database
const {db} = require('../products-data/db-functions')

//http://localhost:5000/api/v1/airbeans/

router.get('/',async(req,res)=>{

  let _coffeemenu = await db.get('coffeemenu').value();
  console.log({coffeemenu:_coffeemenu});
  res.send({coffeemenu:_coffeemenu});

});

//POST an order...
router.post('/order',async(req,res)=>{
    console.log('Order recieved');
    // Construct order 
    let order = {
        orderNr : generateOrderNumber(),
        key: uuidv4(), // Generate uuid,
        items: req.body.items,
        totalOrderValue:totalPrice(req.body.items),
        eta: createETA(),
    }
    
    if(order.items.length == 0){
      console.log(`Empty order NOT allowed `);
      res.send({ msgg: 'NOT ALLOWED !' });
    }else{
      // Add order to db
      await db.get('orders')
      .push(order)
      .write();
      setTimeout(() => {
          console.log(`Order ${order.orderNr} stored in db. And will be ready in ${order.eta}`);
          res.send({ eta: order.eta, orderNr: order.orderNr });
      }, 1500);
  }

});

module.exports = router;