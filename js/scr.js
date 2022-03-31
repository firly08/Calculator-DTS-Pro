let display = document.getElementById('screen-main');
let equalScr = document.getElementById('screen-equal');
let buttons = Array.from(document.getElementsByClassName('button'));
let dot = 0
buttons.map(button => {
    button.addEventListener('click', (e) => {
        // console.log(display.innerText)
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '';
                equalScr.innerText = '';
                dot = 0
                break;
            case '=':
                try {
                    display.innerText = equalScr.innerText;
                    // equalScr.innerText = '0'
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);

                }
                break;
            case '√':

                // console.log(button.lastElementChild)
                display.innerText += e.target.innerText;
                // console.log(display.innerText)

                // inputSymb(e.target.innerText)
                // if()
                // const numb = document.querySelectorAll('.button')
                // numb.addEventListener("click", (e) => {
                //     console.log(numb)
                // })
                break;

            case '.':
                console.log(dot)
                if (dot === 0) {
                    display.innerText += e.target.innerText;
                    dot = 1
                }
                else {
                    console.log('dot 1')
                    return
                }
                break

            case '+':
            case '-':
            case '*':
            case '/':
                display.innerText += e.target.innerText;
                dot = 0


                // console.log(display.innerText)
                break

            case '%':
                display.innerText += e.target.innerText;
                equalScr.innerText /= 100
                break
            default:

                // console.log(button)
                try {
                    display.innerText += e.target.innerText;
                    if (getSymbol(display.innerText) === '√') {
                        equalScr.innerText = inputSymb(display.innerText)
                    }else {
                        equalScr.innerText = eval(display.innerText)

                    }
                    // console.log(getSymbol(display.innerText))
                } catch (error) {
                    equalScr.innerText = "Error!"
                }

        }


    });

});

// const numb = document.querySelectorAll('.button')
// numb.addEventListener("click", (e) => {
//     console.log(numb)
// })

const inputSymb = (symb) => {
    // console.log(symb)
    if (getSymbol(symb) === '√') {
        return (Math.sqrt(symb.replace(/[^0-9]/g, '')))

    } else {
        return
    }


}

function getSymbol(symb) {
    return symb.replace(/[\d\., ]/g, '');
}