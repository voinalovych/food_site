function modal() {
	// Modal window

	const modalTrigger = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', showModal);
	});
	
	modal.addEventListener('click', event => {
		if (event.target === modal || event.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	function showModal() {
		modal.classList.add('show');
        modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearTimeout(modalTimer);
		window.removeEventListener('scroll', showModalByScroll);
	}

	function closeModal() {
		modal.classList.toggle('show');
		document.body.style.overflow = '';
	}

	const modalTimer = setTimeout(showModal, 50000);

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			showModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	
	window.addEventListener('scroll', showModalByScroll);
}

export default modal;