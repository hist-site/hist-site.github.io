export function fileHandler(db) {
    var http = new XMLHttpRequest();

    try {
        http.open('GET', db.src, false);
        http.send();
        return (http.status != 200) ? db.href : db.src;
    } catch {
        console.log('asd');
    }



}