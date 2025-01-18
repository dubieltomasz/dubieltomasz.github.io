setTheme('theme-light');

function updateURLParams(type, path = ''){
    var newHref = top.window.location.href.split('?')[0];

    if(type != undefined && type != '')
        newHref += "?" + type;

    if(path != undefined && path != '')
        newHref += "=" + path;

    top.window.location.href = newHref;
}

function updateMain(){
    var urlGET = new URLSearchParams(window.location.search);
    var content = '<h2 style="color: var(--color-information);">home</h1>';

    if(urlGET.has('p')){
        switch(urlGET.get('p')){
            case 'sw':
                document.getElementById("torso").innerHTML = "";

                fetch("sources/data.json")
                    .then((res) => res.json())
                    .then((data) => {
                            for(e in data['articles']){
                                document.getElementById("torso").innerHTML +=
                                    '<article onclick="updateURLParams(' + data['articles'][e].onClick + ')" class="outer">' +
                                        '<img src="resources/sw/images/' + data['articles'][e].image + '">' +
                                        '<article class="inner">' +
                                            '<h3>' + data['articles'][e].header + '</h3>' +
                                            '<p>' + data['articles'][e].paragraph + '</p>' +
                                        '</article>' +
                                    '</article>';
                            }
                });
                break;
            default:
                document.getElementById("torso").innerHTML = content;
                break;
        }
    }
    else if(urlGET.has('m')){
        content = '<iframe src="resources/sw/html/';

        switch(urlGET.get('m')){
            case 'part1':
                content += 'Part1.html';
                break;
            case 'part2':
                content += 'Part2.html';
                break;
            case 'part3':
                content += 'Part3.html';
                break;
            case 'part4':
                content += 'Part4.html';
                break;
            case 'part5':
                content += 'Part5.html';
                break;
            case 'part6':
                content += 'Part6.html';
                break;
            case 'part7':
                content += 'Part7.html';
                break;
            case 'part8':
                content += 'Part8.html';
                break;
            case 'part9':
                content += 'Part9.html';
                break;
            case 'part10':
                content += 'Part10.html';
                break;
            default:
                content = '<iframe src="index.html';
                break;
        }

        content += '" ></iframe>';
        document.getElementById("torso").innerHTML = content;//
    }
    else{
        document.getElementById("torso").innerHTML = content;
    }

}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}