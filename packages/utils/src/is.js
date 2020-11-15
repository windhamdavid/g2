import _ from 'lodash';

/**
 * @param {any} o
 * @return {boolean}
 */
const numeric = (o) => {
	const obj = typeof o === 'string' ? o.replace(/,/g, '') : o;
	return (
		!isNaN(parseFloat(obj)) &&
		!isNaN(Number(obj)) &&
		isFinite(obj) &&
		Object.prototype.toString.call(obj).toLowerCase() !== '[object array]'
	);
};

/**
 * @param {any} o
 * @return {boolean}
 */
const numericZero = (o) => {
	return o === 0 || o === '0';
};

/**
 * @template T
 * @param {T} o
 * @return {o is Exclude<T, undefined | null>}
 */
const defined = (o) => !_.isNil(o);

export const is = {
	/** @type {(o: any) => o is Blob} */
	blob: (o) => o instanceof Blob,
	defined,
	/** @type {(o: any) => o is File} */
	file: (o) => o instanceof File,
	numeric,
	numericZero,
	/** @type {(o: any) => o is import('create-emotion').ObjectInterpolation} */
	objectInterpolation: (o) => _.isPlainObject(o),

	/**
	 * Re-exports from lodash
	 */
	array: _.isArray,
	boolean: _.isBoolean,
	date: _.isDate,
	empty: _.isEmpty,
	function: _.isFunction,
	map: _.isMap,
	nan: _.isNaN,
	nil: _.isNil,
	number: _.isNumber,
	null: _.isNull,
	object: _.isObject,
	objectLike: _.isObjectLike,
	plainObject: _.isPlainObject,
	regExp: _.isRegExp,
	set: _.isSet,
	string: _.isString,
	symbol: _.isSymbol,
	undefined: _.isUndefined,
	weakSet: _.isWeakSet,
	weakMap: _.isWeakMap,
};

export default is;
