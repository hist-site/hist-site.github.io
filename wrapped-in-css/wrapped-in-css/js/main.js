import { wrapped_database as db } from "./database/wrapped-database.js";
import { fileHandler } from "./database/wrapped-database-control.js";

function addLocalStyleSheets() {
    for (const key in db) {
        for (const id in db[key]) {
            const $head = document.head,
                $link = document.createElement('link');
            $link.rel = 'stylesheet';
            fileHandler(db[key][id])
                .then(url => $link.href = url)
            $head.appendChild($link);
        }
    }
}
addLocalStyleSheets()