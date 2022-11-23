	const listArr = [
	'English (Английский)',
	'Русский (Russian)',
	'Беларусский (Беларускі)',
	'Украинский (Український)',
	'Казахский (Қазақ)',
	];

	const langList = document.querySelector('.lang__list');

	listArr.forEach(item => {
		const listItem = document.createElement('li');
		listItem.className = "lang__item";
		const listLink = document.createElement('a');
		listLink.className = "lang__link";
		listLink.append(item);	
		listItem.append(listLink);	
		langList.append(listItem);	
	})