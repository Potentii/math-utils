export default class MathUtils{
	constructor(){
	}


	/**
	 * Clamps a value between min and max
	 * @param {Number} value The value to be clamped
	 * @param {Number} min The minimum value possible
	 * @param {Number} max The maximum value possible
	 * @return {Number} The clamped value
	 */
	static clamp(value, min, max){
		return Math.min(Math.max(value, min), max);
	}


	static scale(value, min, max){
		return (value - min) / (max - min);
	}


	/**
	 *
	 * @param {Number} value
	 * @param {Number} target
	 * @param {Number} deviation
	 * @return {Boolean}
	 */
	static moreOrLess(value, target, deviation){
		return value - deviation <= target && value + deviation >= target;
	}


	/**
	 * Retrieves a new random integer between two numbers
	 * @param {Number} min The minimum boundary (inclusive)
	 * @param {Number} max The maximum boundary (inclusive)
	 * @return {Number}
	 */
	static randomIntBetween(min, max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}