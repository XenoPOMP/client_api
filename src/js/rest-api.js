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
	 * @param {string} url       								   			 адрес, по которому должен быть выполнен запрос
	 * @param {Record<string, any>|string} [body]				 тело запроса.
	 *
	 * @return {Promise<any>}    результат запроса
	 */
	static post(url, body) {
		return fetch(url, {
			method: 'POST',
			mode: 'cors',
			body,
		}).catch(reason => {
			throw new RestError(400, reason);
		});
	}
}

/**
 * Эта функция добавляет search params к URL адресу.
 *
 * @param {string} [url]											целевой URL.
 * @param {Record<string, any>} [params]			параметры запроса.
 *
 * @return {string}
 */
const urlWithSearchParams = (url, params) => {
	/**
	 * Строка, содержащая параметры. (parameter1=lorem&year=2077)
	 *
	 * @type {string|undefined}
	 */
	let paramsString = params
		? Object.keys(params)
				.map(parameterKey => {
					return `${parameterKey}=${params[parameterKey]}`;
				})
				.join('&')
		: undefined;

	return `${url}${paramsString ? `?${paramsString}` : ''}`;
};
