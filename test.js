// Example of using D3.js in Node.js environment with ES modules
import * as d3 from 'd3';

console.log('D3.js version:', d3.version);

// Example: Working with arrays
const data = [1, 2, 3, 4, 5];
const scaledData = data.map(d => d * 10);

console.log('Original data:', data);
console.log('Scaled data:', scaledData);

// Example: Using D3 scales
const scale = d3.scaleLinear()
    .domain([0, 5])
    .range([0, 100]);

console.log('Scale function:');
data.forEach(d => {
    console.log(`${d} -> ${scale(d)}`);
});

// Example: Working with selections (in Node.js environment)
console.log('\nD3.js is successfully installed and working!');