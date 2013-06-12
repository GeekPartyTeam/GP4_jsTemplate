/**
 * Created with IntelliJ IDEA.
 * User: nullD
 * Date: 10.06.13
 * Time: 20:43
 */


var showSlide = function(id)
{
    var slideConfig = slides[id];
    var url = slideConfig.url;

    var actions = slideConfig.actions;

    $('#slide').html('');
    $('#actions').html('');
    $('#description').html('');


    if (slideConfig.description)
    {
        $('#description').html('<h1>'+ slideConfig.description +'</h1>');
    }

    for (index in actions) {
        var action = actions[index];
        $('#actions').append(getActionCode(action.goto, action.text));

    }


    var ext = _detectFormat(url);
    switch (ext)

    {
        case 'swf':
            $('#slide').flash({swf: url, height: 480, width: 640});
            break;
        case 'jpg':
            $('#slide').append('<img width="640" height="480" src="' + url + '"/>');
            break;
        default :
            alert("unknown format: "  + ext)

    }
}

var actionClick = function(goto) {
    showSlide(goto);
    return false;
}



var getActionCode = function(gotoId, text) {
    return '<p><a href="#" onclick="actionClick(\'' + gotoId + '\')">' + text + '</a></p>';
}

var _detectFormat = function(url) {
    var extension = url.substr( (url.lastIndexOf('.') +1) ).toLowerCase();;
    return extension;
}