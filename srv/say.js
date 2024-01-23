module.exports = class srv { 

    // Will be called by url and then processed. It will return a string.
    // In cds service we will have return string.
    hello(req) { 
        return `Hello ${req.data.to}!`
    }
} 