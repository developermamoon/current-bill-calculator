function calculation(unit){

    if (unit > 50 && unit <= 75) {
        cost = unit * 4.19;
    }

    else if (unit > 75 && unit <= 200) {
        let unit1 = unit - 75;
        let cost1 = 75 * 4.19;
        let cost2 = unit1 * 5.72;

        cost = cost1 + cost2;

    }

    else if (unit > 200 && unit <= 300) {
        let unit1 = unit - 75;
        let cost1 = 75 * 4.19;
        let unit2 = unit1 - 125;
        let cost2 = 125 * 5.72;
        let cost3 = unit2 * 6.00;

        cost = cost1 + cost2 + cost3;
    }

    else if (unit > 300 && unit <= 400) {
        let unit1 = unit - 75;
        let cost1 = 75 * 4.19;
        let unit2 = unit1 - 125;
        let cost2 = 125 * 5.72;
        let unit3 = unit2 - 100;
        let cost3 = 100 * 6.00;

        let cost4 = unit3 * 6.34;

        cost = cost1 + cost2 + cost3 + cost4;

    }

    else if (unit > 400 && unit <= 600) {
        let unit1 = unit - 75;
        let cost1 = 75 * 4.19;
        let unit2 = unit1 - 125;
        let cost2 = 125 * 5.72;
        let unit3 = unit2 - 100;
        let cost3 = 100 * 6.00;
        let unit4 = unit3 - 100;
        let cost4 = 100 * 6.34;

        let cost5 = unit4 * 9.94;

        cost = cost1 + cost2 + cost3 + cost4 + cost5;

    }

    else if (unit > 600) {
        let unit1 = unit - 75;
        let cost1 = 75 * 4.19;
        let unit2 = unit1 - 125;
        let cost2 = 125 * 5.72;
        let unit3 = unit2 - 100;
        let cost3 = 100 * 6.00;
        let unit4 = unit3 - 100;
        let cost4 = 100 * 6.34;
        let unit5 = unit4 - 200;
        let cost5 = 200 * 9.94;

        let cost6 = unit5 * 11.46;

        cost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;

    }

    else {
        cost = unit * 3.75;
    }





    let minimumCharge = Math.round(cost);
    // console.log("Minimum Charge: ", minimumCharge);
    // console.log("Demand Charge: 60 taka");

    let rebateBill = minimumCharge + 60;
    // console.log("Rebate pre bill: ",rebateBill);

    let afterAdding5percent = Math.ceil((rebateBill * 5) / 100);

    // console.log("Rebate pre 5 percent= ", afterAdding5percent);
    // console.log("Meter Charge= 10tk");

    let totalBill = rebateBill + afterAdding5percent + 10;

    // console.log('Total Bill: ',totalBill.toFixed(2));

    return totalBill;
}

function totalBill(bill){
    let previousBill = document.getElementById('totalBill').innerText;
    let newBill = parseFloat(previousBill) + bill;
    document.getElementById('totalBill').innerText= newBill;
    console.log(newBill);

}

document.getElementById('calculateButton1').addEventListener('click', function(){
    const unit = document.getElementById('unitData1').value;
    document.getElementById('unitData1').value = '';


    const addUnit = document.getElementById('unitAdd1');
    const h4 = document.createElement('h4');
    h4.innerHTML = `<h4>Units: ${unit}</h4>`;
    addUnit.appendChild(h4);

    const meterBill = calculation(unit);
    const print = document.getElementById('bill1');
    print.innerText = meterBill.toFixed(2);
    totalBill(meterBill);
})
document.getElementById('calculateButton2').addEventListener('click', function(){
    const unit = document.getElementById('unitData2').value;
    document.getElementById('unitData2').value = '';


    const addUnit = document.getElementById('unitAdd2');
    const h4 = document.createElement('h4');
    h4.innerHTML = `<h4>Units: ${unit}</h4>`;
    addUnit.appendChild(h4);

    const meterBill = calculation(unit);
    const print = document.getElementById('bill2');
    print.innerText = meterBill.toFixed(2);
    totalBill(meterBill);
})
document.getElementById('calculateButton3').addEventListener('click', function(){
    const unit = document.getElementById('unitData3').value;
    document.getElementById('unitData3').value = '';


    const addUnit = document.getElementById('unitAdd3');
    const h4 = document.createElement('h4');
    h4.innerHTML = `<h4>Units: ${unit}</h4>`;
    addUnit.appendChild(h4);

    const meterBill = calculation(unit);
    const print = document.getElementById('bill3');
    print.innerText = meterBill.toFixed(2);
    totalBill(meterBill);
})
document.getElementById('calculateButton4').addEventListener('click', function(){
    const unit = document.getElementById('unitData4').value;
    document.getElementById('unitData4').value = '';


    const addUnit = document.getElementById('unitAdd4');
    const h4 = document.createElement('h4');
    h4.innerHTML = `<h4>Units: ${unit}</h4>`;
    addUnit.appendChild(h4);

    const meterBill = calculation(unit);
    const print = document.getElementById('bill4');
    print.innerText = meterBill.toFixed(2);
    totalBill(meterBill);
})
document.getElementById('calculateButton5').addEventListener('click', function(){
    const unit = document.getElementById('unitData5').value;
    document.getElementById('unitData5').value = '';


    const addUnit = document.getElementById('unitAdd5');
    const h4 = document.createElement('h4');
    h4.innerHTML = `<h4>Units: ${unit}</h4>`;
    addUnit.appendChild(h4);

    const meterBill = calculation(unit);
    const print = document.getElementById('bill5');
    print.innerText = meterBill.toFixed(2);
    totalBill(meterBill);
})
document.getElementById('calculateButton6').addEventListener('click', function(){
    const unit = document.getElementById('unitData6').value;
    document.getElementById('unitData6').value = '';


    const addUnit = document.getElementById('unitAdd6');
    const h4 = document.createElement('h4');
    h4.innerHTML = `<h4>Units: ${unit}</h4>`;
    addUnit.appendChild(h4);

    const meterBill = calculation(unit);
    const print = document.getElementById('bill6');
    print.innerText = meterBill.toFixed(2);
    totalBill(meterBill);
})

