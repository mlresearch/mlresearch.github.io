var divs = $('.paper');
$('#search-authors').on('keyup', function() {
    var val = $.trim(this.value).toLowerCase();
    divs.hide();
    divs.filter(function() {
        return $(this).find('.authors').text().toLowerCase().search(val) >= 0
    }).show();
});
$('#search-titles').on('keyup', function() {
    var val = $.trim(this.value).toLowerCase();
    divs.hide();
    divs.filter(function() {
        return $(this).find('.title').text().toLowerCase().search(val) >= 0
    }).show();
});
