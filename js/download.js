<!-- solution from http://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file -->
function DownloadToFile(filename, containerid) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.getElementById(containerid).innerHTML));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
