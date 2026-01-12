function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    if (str.length === 0) {
        throw new Error('Input cannot be an empty string');
    }
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase
        .replace(/[_\s]+/g, '-') // Replace underscores and spaces with hyphens
        .toLowerCase(); // Convert to lowercase
}

// Example usage:
console.log(toKebabCase("Hello World")); // "hello-world"
console.log(toKebabCase("userName_ID")); // "user-name-id"