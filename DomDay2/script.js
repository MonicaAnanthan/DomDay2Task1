
function publishToTable() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const food = document.getElementById('food').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    if (fname && lname && address && pincode && gender && food && state && country) {

        const tableElement = document.getElementById('formTable');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const fnameEle = document.createElement('td');
        const lnameEle = document.createElement('td');
        const addressEle = document.createElement('td');
        const pincodeEle = document.createElement('td');
        const genderEle = document.createElement('td');
        const foodEle = document.createElement('td');
        const stateEle = document.createElement('td');
        const countryEle = document.createElement('td');

        fnameEle.innerHTML = fname;
        lnameEle.innerHTML = lname;
        addressEle.innerHTML = address;
        pincodeEle.innerHTML = pincode;
        genderEle.innerHTML = gender;
        foodEle.innerHTML = food;
        stateEle.innerHTML = state;
        countryEle.innerHTML = country;

        trElement.appendChild(fnameEle);
        trElement.appendChild(lnameEle);
        trElement.appendChild(addressEle);
        trElement.appendChild(pincodeEle);
        trElement.appendChild(genderEle);
        trElement.appendChild(foodEle);
        trElement.appendChild(stateEle);
        trElement.appendChild(countryEle);

        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
}



