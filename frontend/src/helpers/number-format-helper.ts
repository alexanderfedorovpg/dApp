/**
 * Аналог функции из PHP для форматирования числа с разделением на тысячи.
 *
 * @param {string|number } number Число для преобразования
 *
 * @param {number} decimals Устанавливает число знаков после запятой
 *
 * @param {string} decPoint Устанавливает разделитель дробной части
 *
 * @param {string} thousandsSeparator Устанавливает разделитель тысяч.
 *
 * @see https://www.php.net/manual/ru/function.number-format.php
 *
 */
export default function numberFormat(number: any | string, decimals: number, decPoint, thousandsSeparator) {
	((isNaN(decimals = +decimals) && ((decimals = 0) || true)) || (decimals = Math.min(Math.max(0, decimals), 20)));	// Валидируем decimals: decimals in [0, 20]
	((!(decPoint instanceof String)) && (typeof decPoint != 'string') && (decPoint = '.'));								// Валидируем decPoint: string, default is '.'
	((!(thousandsSeparator instanceof String)) && (typeof thousandsSeparator != 'string') && (thousandsSeparator = ','));	// Валидируем thousandsSeparator: string, default is ','
	if (isNaN(parseFloat(number)) || isNaN(number = +number) || !isFinite(number)) {			// Если number не число или безконечное чило, возвращаем 0 (~numberFormat(0, decimals, decPoint, thousandsSeparator));
		return (0).toFixed(decimals).replace('.', decPoint);
	}
	const isNegative = (number < 0);
	number           = Math.abs(number);
	let intPartStr   = parseInt(String(Math.abs(number))).toString();	// Получаем целую часть ввиде строки (тернарный оператор в начале, чтобы для числа -0.5 целая часть выглядела как "-0"
	let floatPartStr = number.toString().substr(intPartStr.length + 1);
	if (floatPartStr.length <= decimals) {
		floatPartStr = (floatPartStr + (0).toFixed(decimals).substr(2)).substr(0, decimals);
	}
	else {
		// @ts-ignore
		number       = (+intPartStr + ((('0' + floatPartStr).substr(0, decimals) + (function (q: any) {
			// @ts-ignore
			var r = q.replace(/(\d)[1-4]+$/, '$1').replace(/(\d)[5-9]+$/, '$1+1');
			q     = (/^\d{2,}\+/.test(r) && r[0] == '0' ? r.match(/^0+/)[0] : '') + (r ? (eval(r.replace(/^0+/, '') || 0)).toString() : r);
			return q.length > 1 ? arguments.callee(q) : q;
		})(('0' + floatPartStr).substr(decimals))).replace(/^(\d)/, '$1.') * 1)).toString();
		intPartStr   = parseInt(number).toString();
		floatPartStr = (number.substring(intPartStr.length + 1) + (0).toFixed(decimals)).substr(0, decimals);
	}
	if (intPartStr != '0') {		// если целая часть не "0" и не "-0" - разбиваем по тысячам (1234 -> 1,234 при дефолтном thousandsSeparator
		intPartStr = ((0).toFixed(3 - ((intPartStr.length % 3) || 3)).substr(2) + intPartStr)    // вставляем недостающие нули перед числом ("1234" -> "001234", "-1234" -> "-001234")
			.replace(/(\d{3}(?!$))/g, '$1' + thousandsSeparator)    // Разбиваем по тысячам ("001234' -> "001 234", "-001234" -> "-001 234"
			.replace(/^(-)?0+\s*/, '$1');	// Убираем ведёщие нули ("001 234" -> "1 234", "-001 234" -> "-1 234")
	}

	return (isNegative ? '-' : '') + intPartStr + (floatPartStr ? decPoint + floatPartStr : '');
}
