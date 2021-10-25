import { wrapped_database as db, wrapped_database_addons as dba } from "./database/database.js";
import { fileHandler } from "./database/database-control.js";
import { addClassController } from "./class-controller.js";
import { wPreloader, wPreloaderDisabled } from "./addons/preloader.js";

wPreloader();
wPreloaderDisabled();

function addStyleSheets() {
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

addStyleSheets();
addClassController();