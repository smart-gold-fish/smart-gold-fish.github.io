document.addEventListener('DOMContentLoaded', () => {
	const navigation = document.getElementById('navigation');
	const content = document.getElementById('content');

	// Функция для загрузки контента из папок
	function loadContent(folder) {
		fetch(`content/${folder}/index.html`)
			.then(response => {
				if (!response.ok) throw new Error('Network response was not ok');
				return response.text();
			})
			.then(data => {
				content.innerHTML = data;
			})
			.catch(error => {
				content.innerHTML = `<p>Ошибка загрузки контента: ${error.message}</p>`;
			});
	}

	// Добавление ссылок на папки в навигацию
	const folders = ['folder1', 'folder2', 'folder3'];

	folders.forEach(folder => {
		const link = document.createElement('a');
		link.href = '#';
		link.textContent = folder;
		link.addEventListener('click', (e) => {
			e.preventDefault();
			loadContent(folder);
		});
		navigation.appendChild(link);
	});
});