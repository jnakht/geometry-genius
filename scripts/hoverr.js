const Divs = document.getElementsByClassName('Hoverr');

let cnt = 0;
for (const Div of Divs) {
    
    if (cnt % 2 === 0) {
        Div.addEventListener('mouseenter', function() {
            Div.style.backgroundColor = '#E5E7EB';
        });
        Div.addEventListener('mouseleave', function() {
            Div.style.backgroundColor = '';
        });
    }
    else {
        Div.addEventListener('mouseenter', function() {
            Div.style.backgroundColor = '#DBEAFE';
        });
        Div.addEventListener('mouseleave', function() {
            Div.style.backgroundColor = '';
        });
    }
    cnt++;
}
