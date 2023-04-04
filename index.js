function stringLength (string) {
    if (string.length < 1 || string.length > 10){
        return string.length;
    } else {
        return 'number > 10 0r < 1'
    }
}


if (stringLength('minecraft') === 9 ){
    console.log('the test passed');
} else {
    throw new Error('the test failed');
}

if (stringLength('') === 'number > 10 0r < 1' ){
    console.log('the test passed');
} else {
    throw new Error('the test failed');
}

if (stringLength('minecrafting always') === 'number > 10 0r < 1' ){
    console.log('the test passed');
} else {
    throw new Error('the test failed');
}