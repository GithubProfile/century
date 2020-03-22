/*! Copyright (c) 2013 Denys Petiukov. License: BSD 3-Clause. */

(function(){
    var buttons = document.querySelectorAll('.filter > a'),
        postExcerpts = document.querySelectorAll('.postExcerpts > .postExcerpt');
    buttons.forEach(button => button.addEventListener('click', (e) => {
        e.preventDefault();
        var className = e.target.className;
        var firstClassName = className.split(' ')[0];
        buttons.forEach(button => {
            button.classList.remove('selected');
        });
        e.target.classList.add('selected');
        postExcerpts.forEach(postExcerpt => {
            if (firstClassName == 'all' || postExcerpt.classList.contains(firstClassName)) {
                postExcerpt.classList.remove('hide');
            }
            else if (!postExcerpt.classList.contains(firstClassName)) {
                postExcerpt.classList.add('hide');
            }
        });
    }));
}());
