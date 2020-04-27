// search script for prototype/index.html
class PrototypeSearch {

	constructor() {
		this.element = document.getElementById('searchInput');
		this.element.addEventListener('keyup', this.startSearch.bind(this));
		this.ul = document.querySelector('.simple-list');
		this.li = this.ul.querySelectorAll('li');
	}

	startSearch() {
		const filter = this.element.value.toUpperCase();
		this.li.forEach(item => {
			let a = item.getElementsByTagName('a')[0];
			let txtValue = a.textContent || a.innerText;
			txtValue.toUpperCase().indexOf(filter) > -1 ? item.setAttribute('data-search', 'true') : item.setAttribute('data-search', 'false');
		});
		this.hideSearchResults();
	};

	hideSearchResults() {
		const elementsFalse = document.querySelectorAll('li[data-search="false"]');
		elementsFalse.forEach(item => {
			item.classList.add('hide');
		});
		this.showSearchResults();
	}

	showSearchResults() {
		const elementsTrue = document.querySelectorAll('li[data-search="true"]');
		elementsTrue.forEach(item => {
			item.classList.remove('hide');
		});
	}
}

new PrototypeSearch;


