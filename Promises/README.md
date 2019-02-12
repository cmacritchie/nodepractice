promisees include resolve and reject
resolve is when everything goes well
reject is when it doesn't go well

this is good for handling a lot of the complicated if statements if something didn't work as expected

taken an async that usually requires callbacks and wrapped it to use promises, some things you want them to use promises

promise chaining you can keep using .then

instead of using the second callback for error message you can use .catch() instead, it's a little easier and cleaner

lastyle when making requests you can use Axios module which has promises built in, makes things a little easier. a great 
