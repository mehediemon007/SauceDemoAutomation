
class Utilities{

     trimsFloat(value){
          //console.log(value);
          const floatValue = parseFloat(value.replace(/[\d.]/g, ''));
          //console.log(floatValue);
          return floatValue;
     }

     sumTotal(prices){
          const totalAmount = prices.map(num => num).reduce((acc, curr) => acc + curr, 0);
          return totalAmount;
     }
     
}

export default new Utilities();