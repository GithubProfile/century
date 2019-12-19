/*! Copyright (c) 2013 Denys Petiukov. License: BSD 3-Clause. */

(function(){
    var body = document.querySelector('body'),
        advertisement = body.querySelector('.advertisement'),
        adCloseButton = advertisement.querySelector('.close-button');
    body.style.overflow = 'hidden';
    adCloseButton.addEventListener('click', function(e) {
        e.preventDefault();
        body.removeAttribute('style');
        advertisement.style.display = 'none';
    });
}());