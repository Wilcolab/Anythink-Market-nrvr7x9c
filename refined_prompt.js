/**
 * Converts a given string to camelCase format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {Error} Will throw an error if the input is null, undefined, or not a string.
 * @throws {Error} Will throw an error if the input is an empty string after trimming.
 * @returns {string} The camelCase version of the input string.
 *
 * @example
 * toCamelCase("hello world"); // returns "helloWorld"
 * toCamelCase("hello-world"); // returns "helloWorld"
 * toCamelCase("hello_world"); // returns "helloWorld"
 * toCamelCase("HELLO WORLD"); // returns "helloWorld"
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {Error} Will throw an error if the input is null, undefined, or not a string.
 * @throws {Error} Will throw an error if the input is an empty string after trimming.
 * @returns {string} The dot.case version of the input string.
 *
 * @example
 * toDotCase("hello world"); // returns "hello.world"
 * toDotCase("hello-world"); // returns "hello.world"
 * toDotCase("hello_world"); // returns "hello.world"
 * toDotCase("HELLO WORLD"); // returns "hello.world"
 */
function toCamelCase(input) {
    // Handle null, undefined, or non-string inputs
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Handle empty strings
    if (trimmed.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    // Split by spaces, hyphens, or underscores
    const words = trimmed.split(/[\s\-_]+/);

    // Convert to camelCase
    return words
        .map((word, index) => {
            if (word.length === 0) return "";
            // First word is lowercase, subsequent words are capitalized
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}

function toDotCase(input) {
    // Handle null, undefined, or non-string inputs
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Handle empty strings
    if (trimmed.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    // Split by spaces, hyphens, or underscores
    const words = trimmed.split(/[\\s\-_]+/);

    // Convert to dot.case
    return words.join(".").toLowerCase();
}

// Example usage:
console.log(toCamelCase("hello world")); // helloWorld
console.log(toCamelCase("hello-world")); // helloWorld
console.log(toCamelCase("hello_world")); // helloWorld
console.log(toCamelCase("HELLO WORLD")); // helloWorld

console.log(toDotCase("hello world")); // hello.world
console.log(toDotCase("hello-world")); // hello.world
console.log(toDotCase("hello_world")); // hello.world
console.log(toDotCase("HELLO WORLD")); // hello.world