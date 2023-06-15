$(document).ready(function () {
	$('button#data-fetcher').click(function () {
		// Вставляем в таблицу надпись Loading...
		$('table#response > tbody').html('Loading...');

		Rest.get('https://jsonplaceholder.typicode.com/users/1/todos')
			.then(response => response.json())
			.then(json => {
				// Проходимся по каждому результату из массива
				// и добавляем новую строку в таблица.
				json.forEach(entry => {
					/** Выбираем тело таблицы. */
					const tableBody = $('table#response > tbody');
					/** Контент в теле таблицы. */
					const tableContent = tableBody.html();

					// Деструктуризация объекта
					const { userId, id, title, completed } = entry;

					// Добавляем строку в таблицу
					tableBody.html(
						tableContent +
							`
							<tr>
								<th scope='row'>${id}</th>
								<td>${title}</td>
								<td>${completed ? '✅' : '⛔'}</td>
							</tr>`
					);
				});
			});
	});
});
