# Read book War and peace

## Observations
it returns all the required words that start with T and end with S and prints them into an array some words appear more than once which was expected since i was reading from a book. i chose to exclude the hyphen because certain words in the english language use it to take 2 different words and turn it into a single word

## measures took to solve the problem
first off i created the readbook function and read the book War and Peace and used regular expression to remove all special characters and used the tolower function to convert all the words to lower case making it easier to work with if they all have a uniform look. Step 2 i took all the words and put them in an array named cleanString making it easier to work with when in a single location. Step 3 i created the firstT function to filter out all the words starting with T and put them in a new array. Step 4 i created the endS function to go throw the Item retuneds in FirstT which end with the letter S thus allowing me to find the required letters from War and Peace. Step 5 i then Console logged the my endsWithS variable in order to display required words

## Aim
Write a Javascript program that will read the book War and peace then filter and display only the words starting with T and ending with S

## Requirements
1. NodeJs
2. NPM

## Installation

### 1. Install Node js on Window
To install node on windows please visit [link](https://nodejs.org/en/download/)

### 2. Install Node on linux
Run the following command
```
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
```
NPM is packaged with NodeJS

## how to get the project
first clone the repo by using the command
```
git clone https://github.com/kgauzampe/readBook.git
```

## how to run the project
after cloning the repo CD into it and run the command
```
node readBook.js
```

