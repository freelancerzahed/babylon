/**
 * Determines size based on the given type and value.
 * @param {string} type - The type of measurement (e.g., "head", "neckHeight", "neckWidth", "shoulderHeight", "shoulderWidth", "pregnancy", "arm", "armDistention", "breast", "torsoDistention", "crotchHeight", "legHeight", "leg", "hip").
 * @param {number} value - The value for the measurement, between 0.0 and 1.0.
 * @returns {string} - Returns the corresponding size description based on the input type and value.
 */
function getSize(type, value = 0.0) {
    switch (type) {
        case 'head':
            if (value <= 0.0) return "small";
            if (value <= 0.5) return "average";
            if (value <= 0.75) return "large";
            if (value <= 1.0) return "very large";
            break;
        case 'neckHeight':
            if (value === 0.0) return "Tall";
            if (value === 0.25 || value === 0.5) return "Average";
            if (value === 0.75) return "Short";
            if (value === 1.0) return "Hidden";
            break;
        case 'neckWidth': //change made
            if (value === 0.0) return "Skinny";
            if (value <= 0.5) return "Average";
            if (value <= 1.0) return "Girthy";
            break;
        case 'neckLayers': //change made
            if (value === 0.0) return "Null";
            if (value <= 1.0) return "Yes";
            break;
        case 'chinShape': //change made
            if (value === 0.0) return "Null";
            if (value <= 1.0) return "Yes";
            break;
        case 'Trapezoid': //change made
            if (value === 0.0) return "Average";
            if (value === 1.0) return "Trapezoidal";
            break;
        case 'shoulderHeight':
            if (value === 0.0) return "Strong";
            if (value === 0.5) return "Average";
            if (value === 1.0) return "Dropped";
            break;
        case 'shoulderWidth': //change made
            if (value <= 0.125) return "Narrow";
            if (value <= 0.625) return "Average";
            if (value <= 1.0) return "Broad";
            break;
        case 'pregnancy':
            if (value === 0.0) return "Trimester 1";
            if (value === 0.334) return "Trimester 2";
            if (value === 0.667) return "Trimester 3";
            if (value === 1.0) return "Trimester 4";
            break;
        case 'arm':
            if (value === 0.0) return "Small";
            if (value === 0.334 || value === 0.667) return "Average";
            if (value === 1.0) return "Large";
            break;
        case 'armDistention': //change made
            if (value === 0.0) return "Short";
            if (value === 0.5) return "Average";
            if (value === 1.0) return "Distended";
            break;
        case 'breast':
            if (value === 0.0) return "AA/A";
            if (value === 0.125) return "B";
            if (value === 0.25) return "C";
            if (value === 0.375) return "D/DD";
            if (value === 0.5) return "DDD/E";
            if (value === 0.625) return "F/G";
            if (value === 0.75) return "HH";
            if (value === 0.875) return "HHH";
            if (value === 1.0) return "J/K";
            break;
        case 'torsoDistention':
            if (value === 0.0) return "Short";
            if (value === 0.5) return "Average";
            if (value === 1.0) return "Tall";
            break;
        case 'crotchHeight': //change made
            if (value === 0.0) return "Average";
            if (value === 1.0) return "Tall";
            break;
        case 'legHeight':
            if (value === 0.0) return "Short";
            if (value === 0.5) return "Average";
            if (value === 1.0) return "Tall";
            break;
        case 'leg': //varies by shape
            if (value === 0.0) return "Leg 1";
            if (value === 0.334) return "Leg 2";
            if (value === 0.667) return "Leg 3";
            if (value === 1.0) return "Leg 4";
            break;
        case 'hip':
            if (value === 0.0) return "Small";
            if (value === 0.5) return "Average";
            if (value === 1.0) return "Wide";
            break;
        case 'bottomWidth':
            if (value === 0.0) return "Small";
            if (value === 1.0) return "Large";
            break;
        default:
            return "invalid type";
    }
    return "invalid value";
}

// Example usage:
// console.log(getSize('head', 0.6)); // Output: "large"
// console.log(getSize('neckHeight', 0.25)); // Output: "Average"
