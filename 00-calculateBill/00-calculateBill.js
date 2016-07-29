function calculateBill (bill,vatRate, tipRate) {

  vatRate = +vatRate /100 * +bill;

  tipRate = +tipRate /100 * +bill;

  return '£' + (+bill + vatRate + tipRate).toFixed(2);




// // Take the bill
//
//   var bill;
//
//   //Calculate the VAT to be added (vatRate /100 * bill)
//
//     var calcvat = vatRate / 100 * bill;
//
//   //Calculate the tip to be added (tipRate / 100 * bill)
//
//   var calctip = tipRate / 100 * bill;
//
//   //add all together
//
//   var total = calcvat + calctip + bill;
//
//   //format to 2 decimal places
//
//   total.toFixed(2);
//
//   //add the £ sign
//
//   var addpound ='£'+total.toFixed(2)
//
//   //return it
//
//   return addpound;

}

module.exports = calculateBill;