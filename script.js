function changeMain(path){
    var url = window.location.href.split('?')[0];
    window.location.href = url + "?q=" + path;
}