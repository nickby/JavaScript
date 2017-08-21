"use strict";

/**
 * Calculate Pow
 * @param {number} x
 * @param {number} n
 * @returns {number|NaN}
 */
function pow(x, n) {
    if (n < 0) {
        return NaN;
    }

    if (n === 0 && x === 0) {
        return NaN;
    }

    if (Math.round(n) !== n) {
        return NaN;
    }

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
