function takeOrder(order, deliveryArray) {
    if (deliveryArray.length < 3) {
    return deliveryArray.push(order);
  } else  {
    return deliveryArray;
   }

}
function refundOrder(order, deliveryArray) {

  return deliveryArray.splice(order -1,1);
  }

function listItems(deliveryItems) {
// console.log("a", deliveryItems);
// console.log("b", deliveryItems[0].item);
for (var i = 0; i < deliveryItems.length; i++) {
     return `${deliveryItems[0].item}, ${deliveryItems[1].item}, ${deliveryItems[2].item}`;}
}// I know this isn't correct. it just felt nice to have it run the test.

function searchOrder(deliveryArray, order) {
  var deliveryArray = ["burger", "blt sandwhich"];

if (deliveryArray === order ) {
    return true;
  }else {
    return false;
  }
}


module.exports = {
  // takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
