$(document).ready(function () {
    var text = 'You can pin apps, websites, people: and folders to Start to easily get to what you use most. Tiles and notifications show what\'s new so you can get important info and updates at a glance. From Start, you don\'t have to bring up the charms to begin a search—start typing to search for what you want. You can choose results from your apps, files, PC settings, and Bing. Ta see a list of all apps on your PC from Start, slide up from the middle of the screen or use the mouse to click the dawn arrow in the bottom let comer. To pin an app to Start select the app by pressing and holding or right clicking the tile, then tap or click Pin to Start. Ta customize Start, swipe up from the bottom edge and tap Customize. (If you\'re using a mouse, right-click anywhere on the screen and click Customize.) From here you can organize the Start screen however you like by moving tiles around, changing tile sizes, and naming groups of tiles.';
    var $div1 = $('<div />').appendTo('body');
    $("body").css('font-family', 'sans-serif');
    $div1.attr('id', 'div1')
        .css({
        'background-color' : '#FFD801',
        'border' : '2px solid black',
        'overflow' : 'auto',
        'padding' : '10px',
        'width' : '500px'
    });
    var $div2 = $div1.clone().appendTo('body');
    var $customTab = $('<p>');
    $customTab.css({
        'padding-left': '50px',
        'font-style' : 'italic'
        }).text('Custom tab');
    $div1.append($customTab);
    var $button1 = $('<button/>')
        .text('Open Start')
        .css({
            'background-color' : '#FFFFCC',
            'border' : '1px solid black',
            'margin-left' : '2%',
            'float' : 'left',
            'overflow' : 'auto',
            'width' : '30%',
            'text-align' : 'left',
            'padding' : '5px'
    });
    $div1.append($button1);
    var $button2 = $button1.clone()
        .text('Connect');
    $div1.append($button2);
    var $button3 = $button1.clone()
        .text('Pin apps')
        .css('background-color', '#CCFFCC');
    $div1.append($button3);

    $div2.css({
        'background-color' : '#AACCFF',
        'border' : '2px solid #272FA3',
        'border-top' : 'none'
    });
    var $div2text = $('<p>');
    $div2text.text(text);
    $div2.append($div2text);
});