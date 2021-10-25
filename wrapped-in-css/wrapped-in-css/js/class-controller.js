import { wrapped_database as db } from "./database/database.js";
import { fileHandler } from "./database/database-control.js";

function searchClassController(keys) {
    if (document.querySelector(db.class_controller[keys].keyWord)) {
        return true;
    }

}

export function addClassController() {
    for (const id in db.class_controller) {
        if (searchClassController(id)) {
            const $head = document.head,
                $link = document.createElement('link');
            $link.rel = 'stylesheet';
            fileHandler(db.class_controller[id])
                .then(url => $link.href = url)
            $head.appendChild($link);
        }
    }
}