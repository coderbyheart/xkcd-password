#!/usr/bin/env node

var xkcdPassword = require('xkcd-password')
var pw = new xkcdPassword()

var options = {
    numWords: 4,
    minLength: 5,
    maxLength: 8
}

pw.generate(options).then(function (result) {
    console.log(result.join(' '))
})
