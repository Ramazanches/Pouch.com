/*let openRequest = indexedDB("products", 1);

openRequest.onupgradeneeded = function() {
	let db = openRequest.result;
	if ( !db.objectStoreNames.contains('basketArr')) {
		db.createObjectStore('basketArr', {keyPath: 'id'})
	}
}

let transaction = db.transaction('basketArr', 'readwrite');
let basketArray = transaction.objetcStore('basketArr');

let basketItem = {
	id: 0, 
	bName: 'Brand Name 1', 
	pName: 'Product Name 1', 
	count: 1, 
	maxCount: 10,
	created: new Date()
};

let request = basketArray.add(basketItem);

openRequest.onsuccess = function() {
	console.log("Продукт добавлен в хранилище", request.result);

	db.onversionchange = function() {
		db.close();
		alert("База данных устарела, пожалуйста перезагрузите страницу.")
	}
}

openRequest.onerror = function() {
	console.error("Error", openRequest.error)
};

openRequest.onblocked = function() {}*/

// let deleteRequest = indexedDB.deleteDatabase(name)