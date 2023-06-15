/**
 * Класс ошибки.
 */
class RestError extends Error {
	constructor(code, reason) {
		super(`Error ${code}: ${reason}.`);
	}
}

class Rest {
	/**
	 * Метод, отвечающий за отправку GET запросов.
	 *
	 * @param {string} url       адрес, по которому должен быть выполнен запрос
	 *
	 * @return {Promise<any>}    результат запроса
	 */
	static get(url) {
		return fetch(url, {
			method: 'GET',
			mode: 'cors',
		}).catch(reason => {
			throw new RestError(400, reason);
		});
	}

	/**
	 * Метод, отвечающий за отправку POST запросов.
	 *
	 * @param {string} url       адрес, по которому должен быть выполнен запрос
	 *
	 * @return {Promise<any>}    результат запроса
	 */
	static post(url) {
		return fetch(url, {
			method: 'POST',
			mode: 'cors',
		}).catch(reason => {
			throw new RestError(400, reason);
		});
	}
}
