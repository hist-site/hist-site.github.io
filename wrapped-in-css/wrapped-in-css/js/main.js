import { wrapped_database as db } from "./database/database.js";
import { fileHandler } from "./database/database-control.js";
// import {wrapped_options as option} from './wrapped-options.js'
import { addClassController } from "./class-controller.js";

document.addEventListener('DOMContentLoaded', addStyleSheets());

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

addClassController()