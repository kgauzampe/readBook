const fs = require('fs');

function readBook(file){
    fs.readFile(file, 'utf8', function (err, data){
        if(err) throw err;

        // Remove all special special characters
        let regex = /[.,"();*#\[\]\/\/?!@%_“$:”0-9‘]/g;
        let removeSpecialChars = data.toLowerCase().replace(regex, ' ');

        // Convert string into array
        let cleanString = removeSpecialChars.split(/\s+/);
        //filter words starting with T and ending with S and put them in a new array
        let startWithT = cleanString.filter(firstT);
        let endWithS = startWithT.filter(endS);

        console.log(endWithS);
    });
}
//find letters starting with T
function firstT(item){
    return item.indexOf('t') == 0;
}
//find letters ending with S
function endS(item){
    return item.indexOf('s') == item.length - 1;
}

readBook("warAndpeace.txt");