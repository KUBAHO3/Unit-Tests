function stringLength (string) {
    return string.length;
}

// console.log(stringLength('minecaft'));

if (stringLength('minecraft') !== 8 ){
    throw new Error('the test failed');
} else {
    console.log('the test passed');
}