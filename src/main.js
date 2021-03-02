let n = 1;
let dynamicStyle = `
.skin {
    position: relative;
    background-color: #ffe600;
    height: 100vh;
}

.triangle {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 160px;
    /* transform: translateX(-50%); */
    margin-left: -10px;
    border: 10px solid black;
    border-color: black transparent transparent;    
}

@keyframes wave{
    0%{
        transform: rotate(0deg);
    }

    33%{
        transform: rotate(5deg);
    }

    66%{
        transform: rotate(-5deg);
    }

    100%{
        transform: rotate(0deg);
    }
}

.triangle:hover{
    animation: wave 300ms infinite linear;
}

.triangle>div{
    content: '';
    position: absolute;
    width: 20px;
    height: 8px;
    border-radius: 20px 20px 0 0;
    background-color: black;
    top: -18px;
    left: -10px;
}

.eye {
    position: absolute;
    width: 64px;
    height: 64px;

    top: 100px;
    left: 50%;

    transform: translateX(-50%);
    border: 2px solid #000;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eye.left {
    margin-left: -110px;
}

.eye.right {
    margin-left: 110px;
}

.eye>.innerEye {
    position: absolute;
    width: 32px;
    height: 32px;
    
    top: 0px;
    left: 8px;
    border: 3px solid #000;
    background-color: #fff;
    border-radius: 50%;
}

.mouth {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 190px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.mouth .up {
    position: absolute;
    padding-top: 13px;
    width: 200px;
    height: 52px;
    z-index: 1;
}

.mouth .up .lip_left{
    position: absolute;
    border: 4px solid black;
    height: 25px;
    top: -1px;
    width: 100px;
    border-radius: 10px 0px 0px 70px;
    border-top: none;
    border-right: none;
    transform: rotatez(-20deg);
    background-color: #ffe600;
    left: 2px;

}

.mouth .up .lip_right{
    position: absolute;
    border: 4px solid black;
    height: 25px;
    width: 100px;
    top: -1px;
    border-radius: 10px 0px 70px 0px;
    border-top: none;
    border-left: none;
    background-color: #ffe600;
    transform: rotatez(20deg);
    left: 102px;
}

.mouth .hidden {
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    height: 180px;
    width: 180px;
    /* background-color: pink; */
    overflow: hidden;
}

.mouth .down {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -430px;
    width: 160px;
    height: 600px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: #8f1b18;
    overflow: hidden;
}

.mouth .down::after{
    content: ' ';
    position: absolute;
    display: block;
    top: 460px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #ec5763;
}

.face {
    position: absolute;
    width: 88px;
    height: 88px;
    left: 50%;
    transform: translateX(-50%);
    top: 200px;
    border: 3px solid black;
    border-radius: 50%;
    background-color: red;
    z-index: 3;
}

.face.left {
    margin-left: -200px;
}

.face.right {
    margin-left: 200px;
}
`;


const style = document.querySelector('#style');
const showHtml = document.querySelector('#placeholder');

let stringFormat = '';
let time = 100;

let step = () => {

    setTimeout(()=> {

        // 优化显示效果
        if (dynamicStyle[n] === '\n') {
            stringFormat = stringFormat + '<br>';
        } else if (dynamicStyle[n] === ' ') {
            stringFormat = stringFormat + '&nbsp';
        } else {
            stringFormat += dynamicStyle[n];
        }

        style.innerHTML = dynamicStyle.substring(0, n);
        showHtml.innerHTML = stringFormat;
        
        showHtml.scrollTo(0, 99999);

        n++;
        if(n <= dynamicStyle.length - 1 && playFlag === 1){
            step(); 
        }

    }, time)

}

step();


// 播放设置
let playFlag = 1;
const btnPlay = document.querySelector('#btnPlay');
const btnPause = document.querySelector('#btnPause');
const btnSlow = document.querySelector('#btnSlow');
const btnNormal = document.querySelector('#btnNormal');
const btnFast = document.querySelector('#btnFast');

btnPlay.addEventListener('click', ()=> {
    playFlag = 1;    
    step();
})

btnPause.addEventListener('click', ()=> {
    playFlag = 0;    
})

btnSlow.addEventListener('click', ()=> {
    playFlag = 1;
    time = 200;
    step();
})

btnNormal.addEventListener('click', ()=> {
    playFlag = 1;
    time = 100;
    step();
})

btnFast.addEventListener('click', ()=> {
    playFlag = 1;
    time = 1;
    step();
})