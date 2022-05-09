function tabs() {
	// Tabs

	const tabs = document.querySelectorAll('.tabheader__item');
	const tabContent = document.querySelectorAll('.tabcontent');
	const tabsParent = document.querySelector('.tabheader__items');

	hideTabContent();
	showTabContent();

	function hideTabContent() {
		tabContent.forEach(item => {
			item.style.display = 'none';
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabContent[i].style.display = 'block';

		tabs[i].classList.add('tabheader__item_active');
	}


	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				if (target == tab) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});
}

export default tabs;