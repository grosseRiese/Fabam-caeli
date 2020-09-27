//something like that: '0699X554D03102020T181545' : rrrrrrrrDateddmmYYTimeHms 
const generateOrderNumber = ()=> {
    return `${Math.random().toString(36).substring(5).toUpperCase()}D${new Date().toJSON().slice(0,10).split('-').reverse().join('')}T${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}`;
}

const totalPrice = (reqBodyItems) =>{
  let total = 0;
  reqBodyItems.forEach(item => {
      total += item.product.price * item.quantity;
      console.log('total: ',total);
  });
  return total;
}
const createETA=()=>{
  let _eta = 5;
  return _eta + Math.floor(Math.random() * 18);
}

module.exports = { generateOrderNumber,totalPrice,createETA}