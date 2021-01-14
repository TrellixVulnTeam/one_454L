let current = 1; //keeps track of the current div
let height = $('.edex__inner__roles').height(); //the height of the roles div
let numberDivs = $('.edex__inner__roles').children().length; //the number of children of the roles div
let first = $('.edex__inner__roles h3:nth-child(1)'); //the first div nested in roles div

setInterval(function() {
    let number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);
