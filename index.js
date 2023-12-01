const fileSystem = require('fs');

const textInput = fileSystem.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInput)

const textOutput = `This is what we know abou the Avacado: ${textInput}. \n Created on ${formatDate(Date.now())}`;
fileSystem.writeFileSync('./txt/output.txt', textOutput);
console.log('File written'); 






function formatDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
}