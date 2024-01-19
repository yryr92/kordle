import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Main.css'
import data from '../code.json'

function MainPage() {

    const [wordArr, setWordArr] = useState([]);
    const [compareArr, setCompareArr] = useState([]);
    const [words, setWords] = useState([
        {
            id:0,
            digit:['','','','','',''],
            state:['B','B','B','B','B','B']
        },
        {
            id:1,
            digit:['','','','','',''],
            state:['B','B','B','B','B','B']
        },
        {
            id:2,
            digit:['','','','','',''],
            state:['B','B','B','B','B','B']
        },
        {
            id:3,
            digit:['','','','','',''],
            state:['B','B','B','B','B','B']
        },
        {
            id:4,
            digit:['','','','','',''],
            state:['B','B','B','B','B','B']
        },
        {
            id:5,
            digit:['','','','','',''],
            state:['B','B','B','B','B','B']
        }
    ]);

    const [digit, setDigit] = useState(0);
    const [line, setLine] = useState(0);
    const [answer, setAnswer] = useState("정답");
    const Hangul = require('hangul-js');

    const keyboardBasic = "flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none ";
    const keyboardWhite = "bg-slate-200 hover:bg-slate-300 active:bg-slate-400";
    const keyboardYellow = "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white";
    const keyboardGreen = "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white";
    const keyboardGrey = "bg-slate-400 text-white";

    //console.log(words);

    //const arr = [];

    useEffect(() => {
        if(digit < 6) {
            addText(line);
            //console.log(digit);
        } else if(digit == 6) {
            addText(line);
            checkText(wordArr);
        } else {
            console.log("입력불가");
        }

      }, [wordArr, digit]);

      useEffect(() => {
        //console.log("compareArr change line : " + line);
        //console.log("compareArr change : " + compareArr);
        
      }, [compareArr])

    useEffect(() => {

        //console.log(document.getElementsByClassName("container-sm"));

        //console.log(document.querySelector("#root > div > div.container-sm.p-3 > div:nth-child(1)"));

        console.log("" + document.querySelector("#root > div > div.container-sm.p-3 > div:nth-child(1) > button:nth-child(1)").innerHTML);

        const handleKeyDown = (e) => {
            
            let key = data[e.key];

            if(key) getText(key);

            if(e.key == 'Enter') submitWord(words[line].digit);

            if(e.key == 'Backspace') deleteText();

        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    })

    const getText = text => {

        setWordArr([...wordArr, text]);
        setDigit(digit + 1);

    }

    const addText = id => {
        setWords(
            words.map(word =>
                word.id === id ? { ...word, digit: wordArr } : word
          )
        );
    };

    const deleteText = () => {

        if(digit > 0) {
            wordArr.pop();
            setDigit(digit - 1);
        }
    };

    // 단어의 형태가 맞는지 확인
    const checkText = word => {

    }

    // 단어 제출
    const submitWord = word => {
        console.log("submitWord : " + word);

        if(digit < 6) {
            alert("음운이 부족합니다");
        } else {
            const answerArr = Hangul.disassemble(answer);
            for (let i = 0; i < answerArr.length; i++) {

                if (word[i] === answerArr[i]) {
                    compareArr[i] = 'C';
                } else if (answerArr.includes(word[i])) {
                    compareArr[i] = 'U';
                } else {
                    compareArr[i] = 'N';
                }
            }

            words[line].state = compareArr;
            console.log("compareArr : " + compareArr);

            setDigit(0);
            setLine(line + 1);
            setWordArr([]);
            setCompareArr([]);
        }

    }

    return (
        <>
          <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex w-80 mx-auto items-center mb-8">
                <h1 className="text-xl grow font-bold">꼬들 - 한국어</h1>
            </div>
            <div className="pb-6">
                <Word word={words[0]}/>
                <Word word={words[1]}/>
                <Word word={words[2]}/>
                <Word word={words[3]}/>
                <Word word={words[4]}/>
                <Word word={words[5]}/>
            </div>
            <div className="container-sm p-3">
                <div className="flex justify-center mb-1"><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅂ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅈ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㄷ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㄱ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅅ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅛ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅕ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅑ</button></div>
                <div className="flex justify-center mb-1"><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅁ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㄴ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅇ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㄹ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅎ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅗ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅓ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅏ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅣ</button></div>
                <div className="flex justify-center"><button onClick={(e)=>{submitWord(words[line].digit)}} className={keyboardBasic + keyboardWhite} style={{width: "65.4px", height: "58px"}}>입력</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅋ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅌ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅊ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅍ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅠ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅜ</button><button onClick={(e)=>{getText(e.target.innerText)}} className={keyboardBasic + keyboardWhite} style={{width: "40px", height: "58px"}}>ㅡ</button><button onClick={deleteText} className={keyboardBasic + keyboardWhite} style={{width: "65.4px", height: "58px"}}>삭제</button></div>
            </div>
        </div>
        </>
      );
}

function Word({word}) {

    const colorBasic = "w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded ";
    const colorWhite = "bg-white border-slate-200";
    const colorGrey = "bg-slate-400 text-white border-slate-400 cell-animation";
    const colorGreen = "bg-green-500 text-white border-green-500 cell-animation";
    const colorYellow = "bg-yellow-500 text-white border-yellow-500 cell-animation";

    const colorState = [colorWhite, colorWhite, colorWhite, colorWhite, colorWhite, colorWhite];

    for(let i = 0; i < word.state.length; i++) {
        if(word.state[i] == 'N') {
            colorState[i] = colorGrey;
        } else if(word.state[i] == 'C') {
            colorState[i] = colorGreen;
        } else if(word.state[i] == 'B') {
            colorState[i] = colorWhite;
        } else {
            colorState[i] = colorYellow;
        }
    }

    return (
        <div className="flex justify-center mb-1">
            <div className={colorBasic + colorState[0]}>{word.digit[0]}</div>
            <div className={colorBasic + colorState[1]}>{word.digit[1]}</div>
            <div className={colorBasic + colorState[2]}>{word.digit[2]}</div>
            <div className={colorBasic + colorState[3]}>{word.digit[3]}</div>
            <div className={colorBasic + colorState[4]}>{word.digit[4]}</div>
            <div className={colorBasic + colorState[5]}>{word.digit[5]}</div>
        </div>
    )
}

export default MainPage


//{word.digit.map((digit, i) => (
//    <div className={colorBasic + colorState[i]}>{digit}</div>
//    ))}