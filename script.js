var url = window.location.href;

function updateURLParams(path){
    window.location.href = url.split('?')[0] + "?q=" + path;
}

function updateMain(){
    var q = new URL(url).searchParams.get('q');
    
    if(q != null)
    {
        document.getElementById("torso").innerHTML='<object type="text/html" data="'+q+'.html" ></object>';
    }
    else
    {
        document.getElementById("torso").innerHTML='aaa';
    }    
}