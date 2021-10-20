export function fileHandler(db) {
    var http = new XMLHttpRequest();
    http.open('GET', db.src, true);
    if (http.send) {
        return db.src;
    } else return db.href;
}