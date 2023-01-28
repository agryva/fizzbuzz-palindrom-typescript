
const palindrom = (str: string) => {
    console.log('original : ', str);
    console.log('palindrom : ', str.split('').reverse().join(''));
    console.log('result : ', str.split('').reverse().join('') === str);
}

const bootstrap = () => {
    const str = 'malayalam';
    palindrom(str);
}

bootstrap();