# TestCafe Proof Of Concept

## Requirements

TestCafe requires the most recent version of NodeJS. Follow the instructions on this [page](https://nodejs.org/en/) to install it.

## Installation

Clone the repository by opening a new terminal and them run for HTTPS.

`git clone https://github.com/Bigpoe/TestCafe-Proof-Of-Concept.git`

Or run for SSH.

`git clone git@github.com:Bigpoe/TestCafe-Proof-Of-Concept.git`

Move to the folder where the repository was downloaded.

Install dependencies running this command

`npm install`

### Execute the tests

Move to the **TestCafe-Proof-Of-Concept** folder by doing 

`cd TestCafe-Proof-Of-Concept`

Execute the following command to run the test script.

`npm run testChrome`

or 

`npx testcafe chrome`

By default, TestCafe looks for the **tests** folder. I you want to specify a test script, then you need to add the path to you r test script.

`npm run testChrome ./tests/test.ts`

You can play around and try the commands `testFirefox` and `testSafari` to execute it in different web browsers. Note that the first time you run the test in a web browsers it will ask for permissions to be executed.
