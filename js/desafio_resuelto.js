function header() {
    const div = document.createElement('div');
    div.className = 'py-5 text-center';
    const img = document.createElement('img');
    img.className = 'd-block mx-auto mb-4';
    img.src = 'bootstrap-solid.svg';
    img.width = 72;
    img.height = 72;
    div.appendChild(img);

    const h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode('Checkout form'));
    div.appendChild(h2);

    const p = document.createElement('p');
    p.className = 'lead';
    p.appendChild(document.createTextNode('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.'));
    div.appendChild(p);

    return div;
  }

  function cartsItem(nombre, descripcion, precio, promo=false) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    if (promo) {
      div.className = 'text-success';
      li.className = 'list-group-item d-flex justify-content-between bg-light';
    }
    else {
      li.className = 'list-group-item d-flex justify-content-between lh-condensed';
    }
    const h6 = document.createElement('h6');
    h6.className = 'my-0';
    const small = document.createElement('small');
    small.className = 'text-muted';
    const span = document.createElement('span');
    span.className = 'text-muted';

    h6.appendChild(document.createTextNode(nombre));
    small.appendChild(document.createTextNode(descripcion));
    div.appendChild(h6);
    div.appendChild(small);
    li.appendChild(div);
    span.appendChild(document.createTextNode(precio));
    li.appendChild(span);

    return li;
  }

  function promoCode() {
    const form = document.createElement('form');
    form.className = 'card p-2';
    const div = document.createElement('div');
    div.className = 'input-group';
    form.appendChild(div);
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Promo code';
    div.appendChild(input);
    const divButton = document.createElement('div');
    divButton.className = 'input-group-append';
    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-secondary';
    button.appendChild(document.createTextNode('Redeem'));
    divButton.appendChild(button);
    div.appendChild(divButton);

    return form;            
  }

  function cartsContainer() {
    const container = document.createElement('div');
    container.className = 'col-md-4 order-md-2 mb-4';
    const h4 = document.createElement('h4');
    h4.className = 'd-flex justify-content-between align-items-center mb-3';
    const span = document.createElement('span');
    span.className = 'text-muted';
    span.appendChild(document.createTextNode('Your cart'));
    h4.appendChild(span);
    const spanNumber = document.createElement('span');
    spanNumber.className = 'badge badge-secondary badge-pill';
    spanNumber.appendChild(document.createTextNode('3'));
    h4.appendChild(span);
    h4.appendChild(spanNumber);
    container.appendChild(h4);

    const ul = document.createElement('ul');
    ul.className = 'list-group mb-3';
    ul.appendChild(cartsItem('Product name', 'Brief description', '$12'));
    ul.appendChild(cartsItem('Second Product', 'Brief description', '$8'));
    ul.appendChild(cartsItem('Third item', 'Brief description', '$5'));
    ul.appendChild(cartsItem('Promo code', 'EXAMPLECODE', '-$5', true));

    const total = document.createElement('li');
    total.className = 'list-group-item d-flex justify-content-between';
    const totalSpan = document.createElement('span');
    totalSpan.appendChild(document.createTextNode('Total (USD)'));
    const totalPrice = document.createElement('strong');
    totalPrice.appendChild(document.createTextNode('$20'));
    total.appendChild(totalSpan);
    total.appendChild(totalPrice);
    ul.appendChild(total);


    container.appendChild(ul);
    container.appendChild(promoCode());
    return container;
  }
  
  function billingContainer() {
    const containerBill = document.createElement('div');
    containerBill.className = 'col-md-8 order-md-1';
    const h4 = document.createElement('h4');
    h4.className = 'mb-3';
    h4.appendChild(document.createTextNode('Billing address'));
    containerBill.appendChild(h4);

    const formVal = document.createElement('form');
    formVal.className = 'needs-validation';
    //document.getElementsByClassName("needs-validation").noValidate = true;
    formVal.noValidate = true;
    containerBill.appendChild(formVal);

    const row = document.createElement('div');
    row.className = 'row';
    formVal.appendChild(row);

    const divForm = document.createElement('div');
    divForm.className = 'col-md-6 mb-3';
    row.appendChild(divForm);

    const labelFirst = document.createElement('label');
    labelFirst.htmlFor = 'firstName';
    labelFirst.appendChild(document.createTextNode('First name'));
    divForm.appendChild(labelFirst);

    const inputFirst = document.createElement('input');
    inputFirst.className = 'form-control';
    inputFirst.type = 'text';
    inputFirst.id = 'firstName';
    inputFirst.placeholder = '';
    att = document.createAttribute('value');
    inputFirst.setAttributeNode(att);
    att = document.createAttribute('required');
    inputFirst.setAttributeNode(att);
    divForm.appendChild(inputFirst);

    const divInvalid = document.createElement('div');
    divInvalid.className = 'invalid-feedback';
    divInvalid.appendChild(document.createTextNode('Valid first name is required'));
    divForm.appendChild(divInvalid);

    const divFormLast = document.createElement('div');
    divFormLast.className = 'col-md-6 mb-3';
    divForm.appendChild(divFormLast);
    row.appendChild(divFormLast);
    const labelLast = document.createElement('label');
    labelLast.htmlFor = 'lastName';
    labelLast.appendChild(document.createTextNode('Last name'));
    divFormLast.appendChild(labelLast);

    const inputLast = document.createElement('input');
    inputLast.className = 'form-control';
    inputLast.type = 'text';
    inputLast.id = 'lastName';
    inputLast.placeholder = '';
    att = document.createAttribute('value');
    inputLast.setAttributeNode(att);
    att = document.createAttribute('required');
    inputLast.setAttributeNode(att);
    divFormLast.appendChild(inputLast);

    const divInvalid2 = document.createElement('div');
    divInvalid2.className = 'invalid-feedback';
    divInvalid2.appendChild(document.createTextNode('Valid first name is required'));
    divFormLast.appendChild(divInvalid2);

    const divUserName = document.createElement('div');
    divUserName.className = 'mb-3';
    formVal.appendChild(divUserName);

    const labelUserName = document.createElement('label');
    labelUserName.htmlFor = 'username';
    labelUserName.appendChild(document.createTextNode('Username'));
    divUserName.appendChild(labelUserName);
    const divUsername2 = document.createElement('div');
    divUsername2.className = 'input-group';
    divUserName.appendChild(divUsername2);
    const divUsername3 = document.createElement('div');
    divUsername3.className = 'input-group-prepend';
    divUsername2.appendChild(divUsername3);
    const spanUserName = document.createElement('span');
    spanUserName.className = 'input-group-text';
    spanUserName.appendChild(document.createTextNode('@'));
    divUsername3.appendChild(spanUserName);

    const inputUserName = document.createElement('input');
    inputUserName.className = 'form-control';
    inputUserName.type = 'text';
    inputUserName.id = 'username';
    inputUserName.placeholder = 'Username';
    inputUserName.requerid = true;
    divUsername2.appendChild(inputUserName);

    const divUsername4 = document.createElement('div');
    divUsername4.className = 'invalid-feedback';
    divUsername4.setAttribute('style', 'width: 100%');
    divUsername4.appendChild(document.createTextNode('Your username is required'));
    divUsername2.appendChild(divUsername4);

    const divEmail = document.createElement('div');
    divEmail.className = 'mb-3';
    formVal.appendChild(divEmail);
    const labelEmail = document.createElement('label');
    labelEmail.htmlFor = 'email';
    labelEmail.appendChild(document.createTextNode('Email'));
    divEmail.appendChild(labelEmail);

    const spanEmail = document.createElement('span');
    spanEmail.className = 'text-muted';
    spanEmail.appendChild(document.createTextNode(' (Optional)'));
    divEmail.appendChild(spanEmail);

    const inputEmail = document.createElement('input');
    inputEmail.className = 'form-control';
    inputEmail.type = 'email';
    inputEmail.id = 'email';
    inputEmail.placeholder = 'you@example.com';
    divEmail.appendChild(inputEmail);
    const divEmailInvalid = document.createElement('div');
    divEmailInvalid.className = "invalid-feedback";
    divEmailInvalid.appendChild(document.createTextNode('Please enter a valid email address for shipping updates.'));
    divEmail.appendChild(divEmailInvalid);
    
    const divAddress = document.createElement('div');
    divAddress.className = 'mb-3';
    formVal.appendChild(divAddress);

    const labelAddress = document.createElement('label');
    labelAddress.htmlFor = 'address';
    labelAddress.appendChild(document.createTextNode('Address'));
    divAddress.appendChild(labelAddress);
  
    const inputAddress = document.createElement('input');
    inputAddress.className = 'form-control';
    inputAddress.type = 'text';
    inputAddress.id = 'address';
    inputAddress.placeholder = '1234 Main St';
    inputAddress.required = true;
    divAddress.appendChild(inputAddress);
    const divInvalidAddress = document.createElement('div');
    divInvalidAddress.className = 'invalid-feedback';
    divInvalidAddress.appendChild(document.createTextNode('Please enter your shipping address.'));
    divAddress.appendChild(divInvalidAddress);

    //<div class="invalid-feedback">Please enter your shipping address.

    const divAddress2 = document.createElement('div');
    divAddress2.className = 'address';
    divAddress2.appendChild(document.createTextNode('Address'));
    formVal.appendChild(divAddress2);

    const labelAddress2 = document.createElement('label');
    labelAddress2.htmlFor = 'address2';
    labelAddress2.appendChild(document.createTextNode('Address'));
    divAddress2.appendChild(labelAddress2);

    const spanAddress2 = document.createElement('span');
    spanAddress2.className = 'text-muted';
    spanAddress2.appendChild(document.createTextNode(' (Optional)'));
    divAddress2.appendChild(spanAddress2);
  
    const inputAddress2 = document.createElement('input');
    inputAddress2.className = 'form-control';
    inputAddress2.type = 'text';
    inputAddress2.id = 'address2';
    inputAddress2.placeholder = 'Apartment or suite';
    divAddress2.appendChild(inputAddress2);

    const divRowLocation = document.createElement('div');
    divRowLocation.className = 'row';
    formVal.appendChild(divRowLocation);

    const divCountry = document.createElement('div');
    divCountry.className = 'col-md-5 mb-3';
    divRowLocation.appendChild(divCountry);
    const labelCountry = document.createElement('label');
    labelCountry.htmlFor = 'country';
    labelCountry.appendChild(document.createTextNode('Country'));
    divCountry.appendChild(labelCountry);
    const selectCountry = document.createElement('select');
    selectCountry.className = 'custom-select d-block w-100';
    selectCountry.id = 'country';
    selectCountry.required = true;
    divCountry.appendChild(selectCountry);
    const optionCountry = document.createElement('option');
    optionCountry.value = '';
    optionCountry.appendChild(document.createTextNode('Choose...'));
    const optionUS = document.createElement('option');
    optionUS.appendChild(document.createTextNode('United States'));
    selectCountry.appendChild(optionCountry);
    selectCountry.appendChild(optionUS);
    const divInvalidCountry = document.createElement('div');
    divInvalidCountry.className = 'invalid-feedback';
    divInvalidCountry.appendChild(document.createTextNode('Please select a valid country.'));
    divCountry.appendChild(divInvalidCountry);
    
    const divState = document.createElement('div');
    divState.className = "col-md-4 mb-3";
    divRowLocation.appendChild(divState);
    const labelState = document.createElement('label');
    labelState.htmlFor = 'state';
    labelState.appendChild(document.createTextNode('State'));
    divState.appendChild(labelState);
    const selectState = document.createElement('select');
    selectState.className = 'custom-select d-block w-100';
    selectState.id = 'state';
    selectState.required = true;
    divState.appendChild(selectState);
    const optionState = document.createElement('option');
    optionState.value = '';
    optionState.appendChild(document.createTextNode('Choose...'));
    const optionST = document.createElement('option');
    optionST.appendChild(document.createTextNode('California'));
    selectState.appendChild(optionState);
    selectState.appendChild(optionST);
    const divInvalidState = document.createElement('div');
    divInvalidState.className = 'invalid-feedback';
    divInvalidState.appendChild(document.createTextNode('Please provide a valid state.'));
    divState.appendChild(divInvalidState);

    const divZip = document.createElement('div');
    divZip.className = "col-md-3 mb-3";
    divRowLocation.appendChild(divZip);
    const labelZip = document.createElement('label');
    labelZip.htmlFor = 'zip';
    labelZip.appendChild(document.createTextNode('Zip'));
    divZip.appendChild(labelZip);
    const inputZip = document.createElement('input');
    inputZip.type = 'text';
    inputZip.className = 'form-control';
    inputZip.id = 'zip';
    inputZip.placeholder = '';
    inputZip.required = true;
    divZip.appendChild(inputZip);
    const divInvalidZip = document.createElement('div');
    divInvalidZip.className = 'invalid-feedback';
    divInvalidZip.appendChild(document.createTextNode('Zip code required.'));
    divZip.appendChild(divInvalidZip);

    const hr1 = document.createElement('hr');
    hr1.className = "mb-4";
    formVal.appendChild(hr1);

    const divCheckbox1 = document.createElement('div');
    divCheckbox1.className = "custom-control custom-checkbox";
    formVal.appendChild(divCheckbox1);
    const inputCheckbox1 = document.createElement('input');
    inputCheckbox1.type = 'checkbox';
    inputCheckbox1.className = 'custom-control-input';
    inputCheckbox1.id = 'save-info';
    divCheckbox1.appendChild(inputCheckbox1);
    const labelCheckbox1 = document.createElement('label');
    labelCheckbox1.className = "custom-control-label";
    labelCheckbox1.htmlFor = "same-address";
    labelCheckbox1.appendChild(document.createTextNode('Shipping address is the same as my billing address'));
    divCheckbox1.appendChild(labelCheckbox1);

    const divCheckbox2 = document.createElement('div');
    divCheckbox2.className = "custom-control custom-checkbox";
    formVal.appendChild(divCheckbox2);
    const inputCheckbox2 = document.createElement('input');
    inputCheckbox2.type = 'checkbox';
    inputCheckbox2.className = 'custom-control-input';
    inputCheckbox2.id = 'save-info';
    divCheckbox1.appendChild(inputCheckbox2);
    const labelCheckbox2 = document.createElement('label');
    labelCheckbox2.className = "custom-control-label";
    labelCheckbox2.htmlFor = "save-info";
    labelCheckbox2.appendChild(document.createTextNode('Save this information for next time'));
    divCheckbox2.appendChild(labelCheckbox2);

    const hr2 = document.createElement('hr');
    hr2.className = "mb-4";
    formVal.appendChild(hr2);

    const h4Payment = document.createElement('h4');
    h4Payment.className = "mb-3";
    h4Payment.textContent = "Payment";
    formVal.appendChild(h4Payment);

    const divPayBlock = document.createElement('div');
    divPayBlock.className = "d-block my-3";
    formVal.appendChild(divPayBlock);

    const divPayCustom1 = document.createElement('div');
    divPayCustom1.className = "custom-control custom-radio";
    divPayBlock.appendChild(divPayCustom1);
    const inputPayCustom1 = document.createElement('input');
    inputPayCustom1.className = "custom-control-input";
    inputPayCustom1.type = "radio";
    inputPayCustom1.id = "credit";
    inputPayCustom1.name = "paymentMethod";
    inputPayCustom1.checked = true;
    inputPayCustom1.required = true;
    divPayCustom1.appendChild(inputPayCustom1);
    const labelPayCustom1 = document.createElement('label');
    labelPayCustom1.className = "custom-control-label";
    labelPayCustom1.htmlFor = "credit";
    labelPayCustom1.appendChild(document.createTextNode('Credit card'));
    divPayCustom1.appendChild(labelPayCustom1);

    const divPayCustom2 = document.createElement('div');
    divPayCustom2.className = "custom-control custom-radio";
    divPayBlock.appendChild(divPayCustom2);
    const inputPayCustom2 = document.createElement('input');
    inputPayCustom2.className = "custom-control-input";
    inputPayCustom2.type = "radio";
    inputPayCustom2.id = "debit";
    inputPayCustom2.name = "paymentMethod";
    inputPayCustom2.required = true;
    divPayCustom2.appendChild(inputPayCustom2);
    const labelPayCustom2 = document.createElement('label');
    labelPayCustom2.className = "custom-control-label";
    labelPayCustom2.htmlFor = "debit";
    labelPayCustom2.appendChild(document.createTextNode('Debit card'));
    divPayCustom2.appendChild(labelPayCustom2);

    const divPayCustom3 = document.createElement('div');
    divPayCustom3.className = "custom-control custom-radio";
    divPayBlock.appendChild(divPayCustom3);
    const inputPayCustom3 = document.createElement('input');
    inputPayCustom3.className = "custom-control-input";
    inputPayCustom3.type = "radio";
    inputPayCustom3.id = "paypal";
    inputPayCustom3.name = "paymentMethod";
    inputPayCustom3.required = true;
    divPayCustom3.appendChild(inputPayCustom3);
    const labelPayCustom3 = document.createElement('label');
    labelPayCustom3.className = "custom-control-label";
    labelPayCustom3.htmlFor = "paypal";
    labelPayCustom3.appendChild(document.createTextNode('Paypal'));
    divPayCustom3.appendChild(labelPayCustom3);

    const divCardRow = document.createElement('div');
    divCardRow.className = "row";
    formVal.appendChild(divCardRow);

    const divCardCol = document.createElement('div');
    divCardCol.className = "col-md-6 mb-3";
    divCardRow.appendChild(divCardCol);
    const labelCardCol = document.createElement('label');
    labelCardCol.htmlFor = "cc-name";
    labelCardCol.appendChild(document.createTextNode('Name on card'));
    divCardCol.appendChild(labelCardCol);
    const inputCardCol = document.createElement('input');
    inputCardCol.className = "form-control";
    inputCardCol.type = "text";
    inputCardCol.id = "cc-name";
    inputCardCol.placeholder = "";
    inputCardCol.required = true;
    divCardCol.appendChild(inputCardCol);
    const smallCardCol = document.createElement('small');
    smallCardCol.className = "text-muted";
    smallCardCol.appendChild(document.createTextNode('Full name as displayed on card'));
    divCardCol.appendChild(smallCardCol);
    const divInvalidCard = document.createElement('div');
    divInvalidCard.className = "invalid-feedback";
    divInvalidCard.appendChild(document.createTextNode('Name on card is required'));
    divCardCol.appendChild(divInvalidCard);

    const divCardCol2 = document.createElement('div');
    divCardCol2.className = "col-md-6 mb-3";
    divCardRow.appendChild(divCardCol2);
    const labelCardCol2 = document.createElement('label');
    labelCardCol2.htmlFor = "cc-name";
    labelCardCol2.appendChild(document.createTextNode('Credit card number'));
    divCardCol2.appendChild(labelCardCol2);
    const inputCardCol2 = document.createElement('input');
    inputCardCol2.className = "form-control";
    inputCardCol2.type = "text";
    inputCardCol2.id = "cc-name";
    inputCardCol2.placeholder = "";
    inputCardCol2.required = true;
    divCardCol2.appendChild(inputCardCol2);
    const divInvalidCard2 = document.createElement('div');
    divInvalidCard2.className = "invalid-feedback";
    divInvalidCard2.appendChild(document.createTextNode('Credit card number is required'));
    divCardCol2.appendChild(divInvalidCard2);

    const divCardRow2 = document.createElement('div');
    divCardRow2.className = "row";
    formVal.appendChild(divCardRow2);

    const divCardCol3 = document.createElement('div');
    divCardCol3.className = "col-md-3 mb-3";
    divCardRow2.appendChild(divCardCol3);
    const labelCardCol3 = document.createElement('label');
    labelCardCol3.htmlFor = "cc-expiration";
    labelCardCol3.appendChild(document.createTextNode('Expiration'));
    divCardCol3.appendChild(labelCardCol3);
    const inputCardCol3 = document.createElement('input');
    inputCardCol3.className = "form-control";
    inputCardCol3.type = "text";
    inputCardCol3.id = "cc-expiration";
    inputCardCol3.placeholder = "";
    inputCardCol3.required = true;
    divCardCol3.appendChild(inputCardCol3);
    const divInvalidCardExp = document.createElement('div');
    divInvalidCardExp.className = "invalid-feedback";
    divInvalidCardExp.appendChild(document.createTextNode('Expiration date required'));
    divCardCol3.appendChild(divInvalidCardExp);

    const divCardCol4 = document.createElement('div');
    divCardCol4.className = "col-md-3 mb-3";
    divCardRow2.appendChild(divCardCol4);
    const labelCardCol4 = document.createElement('label');
    labelCardCol4.htmlFor = "cc-cvv";
    labelCardCol4.appendChild(document.createTextNode('CVV'));
    divCardCol4.appendChild(labelCardCol4);
    const inputCardCol4 = document.createElement('input');
    inputCardCol4.className = "form-control";
    inputCardCol4.type = "text";
    inputCardCol4.id = "cc-cvv";
    inputCardCol4.placeholder = "";
    inputCardCol4.required = true;
    divCardCol4.appendChild(inputCardCol4);
    const divInvalidCardExp2 = document.createElement('div');
    divInvalidCardExp2.className = "invalid-feedback";
    divInvalidCardExp2.appendChild(document.createTextNode('Security code required'));
    divCardCol4.appendChild(divInvalidCardExp2);
 
    const hr3 = document.createElement('hr');
    hr3.className = "mb-4";
    formVal.appendChild(hr3);

    const buttonForm = document.createElement('button');
    buttonForm.className = "btn btn-primary btn-lg btn-block";
    buttonForm.type = "submit";
    buttonForm.textContent = "Continue to checkout";
    formVal.appendChild(buttonForm);

    return containerBill;
  }
  
  
  function footerLink(texto) {
    const li = document.createElement('li');
    li.className = 'list-inline-item';
    const a = document.createElement('a');
    a.href = '#';
    a.appendChild(document.createTextNode(texto));
    li.appendChild(a);

    return li;
  }

  function footerContainer() {
    const footer = document.createElement('footer');
    footer.className = 'my-5 pt-5 text-muted text-center text-small';
    const p = document.createElement('p');
    p.className = 'mb-1';
    p.appendChild(document.createTextNode('2017-2019 Company Name'));
    footer.appendChild(p);

    const ul = document.createElement('ul');
    ul.className = 'list-inline';
    ul.appendChild(footerLink('Privacy'));
    ul.appendChild(footerLink('Terms'));
    ul.appendChild(footerLink('Support'));
    footer.appendChild(ul);
    
    return footer;
  }

  const body = document.getElementsByTagName('body')[0];
  body.className = 'bg-light';
  const containerPagina = document.createElement('div');
  containerPagina.className = 'container';
  body.appendChild(containerPagina);
  containerPagina.appendChild(header());
  const rowPagina = document.createElement('div');
  rowPagina.className = 'row';
  containerPagina.appendChild(rowPagina);
  rowPagina.appendChild(cartsContainer());
  rowPagina.appendChild(billingContainer());
  containerPagina.appendChild(footerContainer());