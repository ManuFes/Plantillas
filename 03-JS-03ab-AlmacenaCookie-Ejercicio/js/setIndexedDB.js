"use strict";

function setIndexedDB(name, value) {
    const transaction = db.transaction(['LoginStore'], 'readwrite');
    const store = transaction.objectStore('LoginStore');
    const request = store.put({ name: name, value: encodeURIComponent(value) });

    request.onsuccess = function() {
        console.log(`IndexedDB: Guardado ${name}=${encodeURIComponent(value)}`);
        // No callback aquí, simplemente registramos el éxito
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al guardar el dato', event);
        // No callback aquí, manejamos el error directamente
    };
}