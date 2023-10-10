const logText = (numStars, text) => {
    getStars(numStars)
    getText(text)
    getStars(numStars)
}

const getStars = (numStars) => {
    const _numStars = numStars ? numStars : 10 
    let string = '';
    for (let i = 0; i < _numStars; i++) {
        string+='*'
    }
    console.log(string);
}



const getText = (text) => {
    const _text = text ? text : 'hi' 
    console.log(_text)
}

export default logText;