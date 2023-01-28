var palindrom = function (str) {
    console.log('original : ', str);
    console.log('palindrom : ', str.split('').reverse().join(''));
    console.log('result : ', str.split('').reverse().join('') === str);
};
var bootstrap = function () {
    var str = 'malayalam';
    palindrom(str);
};
bootstrap();
