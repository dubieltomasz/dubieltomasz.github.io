var url = window.location.href;

function changeMain(path){
    window.location.href = url.split('?')[0] + "?q=" + path;

    return false;
}

var q = new URL(url).searchParams.get('q');

if(q != null)
{
    document.getElementById("torso").innerHTML='<object type="text/html" data="'+q+'.html" ></object>';
}
else
{
    document.getElementById("torso").innerHTML='aaa';
}