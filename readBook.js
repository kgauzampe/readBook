const fs = require('fs');

function readBook(file){
    fs.readFile(file, 'utf8', function (err, data){
        if(err) throw err;

        // Remove special characters
        let regex = /[.,"();*#\[\]\/\/?!@%_“$:”0-9‘]/g;
        let removeSpecialChars = data.toLowerCase().replace(regex, ' ');

        // Convert string into array
        let cleanString = removeSpecialChars.split(/\s+/);


        console.log(cleanString);
    });
}

readBook("warAndpeace.txt");