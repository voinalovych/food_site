function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	// Tabs

	const tabs = document.querySelectorAll(tabsSelector);
	const tabContent = document.querySelectorAll(tabsContentSelector);
	const tabsParent = document.querySelector(tabsParentSelector);

	hideTabContent();
	showTabContent();

	function hideTabContent() {
		tabContent.forEach(item => {
			item.style.display = 'none';
		});

		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabContent[i].style.display = 'block';

		tabs[i].classList.add(activeClass);
	}


	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains(tabsSelector.slice(1))) {
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