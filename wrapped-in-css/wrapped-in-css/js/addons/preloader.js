import { wrapped_database_addons as dba } from "../database/database.js";
import { fileHandler } from "../database/database-control.js";

export function wPreloader() {
    if (dba.preloader.use) {
        const $head = document.head,
            $link = document.createElement('link');
        $link.id = dba.preloader.keyWord;
        $link.rel = 'stylesheet';
        fileHandler(dba.preloader)
            .then(url => $link.href = url)
        $head.appendChild($link);

    }
}

export function wPreloaderDisabled() {
    const preloder = document.querySelector(`.${dba.preloader.keyWord}`);
    preloder.classList.add('disabled');
    setTimeout(() => preloder.remove(), 1000)
}