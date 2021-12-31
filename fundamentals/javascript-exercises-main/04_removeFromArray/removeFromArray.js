const removeFromArray = function(arr, num) {
    let args = Array.from(arguments);
    let argsargs = args.splice(1);
    let new_array = [];
    for (let i = 0; i < argsargs.length; i++) {
        if (i === 0) {
            new_array = arr.filter(item => item !== argsargs[i]);
        } else {
            new_array = new_array.filter(item => item !== argsargs[i]); 
        }
    }
    
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
