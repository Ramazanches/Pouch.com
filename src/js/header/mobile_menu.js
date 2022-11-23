			const burger = document.querySelector('#menuBurger');
			const dropdown = document.querySelector('#menuMobile');
			const navbarIcon = document.querySelectorAll('.navbar__burger__icon');

			toggleMenu(burger, dropdown, 'dropdown_on', 'dropdown_off');

			function toggleMenu(item, modal, classOn, classOff) {
				item.onclick = function() {
					modal.classList.toggle(classOn);

					navbarIcon.forEach(item => {
						if (!item.classList.contains('icon')){
							item.classList.add('icon')
						}
						else {
							item.classList.remove('icon')
						}
					})

					if (modal.classList.contains('hide')) {
						modal.classList.remove('hide');
						for ( let i = 0; i < this.children.length; i++ ) {
					}

					}

						else {
							modal.classList.add(classOff);
							this.rowGap = "4px";
							for ( let i = 0; i < this.children.length; i++ ) {
							}

							setTimeout(function() {
								modal.classList.remove(classOff);
								modal.classList.add('hide');
							}, 1000);
						}
				}
			}