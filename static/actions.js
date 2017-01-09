var button = document.getElementById('general_btn');
var button2 = document.getElementById('reddit_btn');
var button3 = document.getElementById('nerd_btn');
var button4 = document.getElementById('school_btn');
// document.getElementById('general_box').style.display = 'none';
// document.getElementById('reddit_box').style.display = 'none';
// document.getElementById('school_box').style.display = 'none';
// document.getElementById('nerd_box').style.display = 'none';

button.onclick = function() {
    var div = document.getElementById('general_box');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

button2.onclick = function() {
    var div = document.getElementById('reddit_box');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

button3.onclick = function() {
    var div = document.getElementById('nerd_box');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

button4.onclick = function() {
    var div = document.getElementById('school_box');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
