const p = document.getElementById('myParagraph');
console.log(p);
console.log(p.innerHTML);

p.innerHTML = '<span style="color:red;">Changed</span>';

function clickHandler() {
    const inputElement = document.getElementById('txtFirstName');
    const target = document.getElementById('target-p');
    target.innerHTML = inputElement.value;
}

//Adding an Event Listner to a button in JS
const button = document.getElementById('btnClickMe');
button.addEventListener('click', clickHandler);
button.addEventListener('mouseover', clickHandler);
button.addEventListener('mouseout', function() {
    //Anonymous Function
    const p = document.getElementById('target-p');
    p.innerHTML = '';
});

/*
    Working with checkboxes
*/
const chk = document.getElementById('chkMyCheckBox');
chk.addEventListener('change', showCheckboxState);

function showCheckboxState(event) {
    console.log(`check is changed ${new Date()}`);
    console.log(event.target.checked);
    document.getElementById('checkboxState').innerHTML = event.target.checked;
}