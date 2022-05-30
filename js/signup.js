function display(){
    var select = document.getElementById('selectMenu');
    var value = select.options[select.selectedIndex].text;


if (value == 'Email') {
    document.getElementById('selectInput').innerHTML = "<label>Enter your " + value + "</label>" + "<input type='email' id='selInput'><br>";
}

if (value == 'Phone') {
    document.getElementById('selectInput').innerHTML = "<label>Enter your " + value + "</label>" +
        "<input id='selInput' type='tel' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'><br>";
}
}