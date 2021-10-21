export function fileHandler(db) {
    return new Promise((url, notLocally) => {
        return fetch(db.src)
            .then(response => {
                if (response.ok) {
                    url(db.src)
                }
                url(db.href)
            })
    })


}


// return (http.status == 200) ? db.src : db.href;