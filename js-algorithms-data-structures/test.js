let exampleStr = 'Try to count all the non \'alphanumeric characters\' in this sentence!';
let regex = /\W/g;
console.log(exampleStr.match(regex).length); // 10