import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Main.css'

function MainPage() {

    const [wordArr, setWordArr] = useState([])
    const [words, setWords] = useState([
        {
            id:0,
            digit:['','','','','','']
        },
        {
            id:1,
            digit:['','','','','','']
        },
        {
            id:2,
            digit:['','','','','','']
        },
        {
            id:3,
            digit:['','','','','','']
        },
        {
            id:4,
            digit:['','','','','','']
        },
        {
            id:5,
            digit:['','','','','','']
        }
    ]);

    const line = 0;
    const digit = 0;
    console.log(words);

    const getText = (e, text) => {

        console.log("this is text :", text);
        setWordArr([...wordArr, text]);

        //console.log(wordArr.length);
        onToggle(line);


    }

    const onToggle = id => {
        setWords(
            words.map(word =>
                word.id === id ? { ...word, digit: wordArr } : word
          )
        );
    };

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
                <div className="flex justify-center mb-1"><button onClick={(e)=>{getText(e, e.target.innerText)}} className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅂ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅈ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㄷ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㄱ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅅ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅛ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅕ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅑ</button></div>
                <div className="flex justify-center mb-1"><button onClick={(e)=>{getText(e, e.target.innerText)}} className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅁ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㄴ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅇ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㄹ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅎ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅗ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅓ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅏ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅣ</button></div>
                <div className="flex justify-center"><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "65.4px", height: "58px"}}>입력</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅋ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅌ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅊ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅍ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅠ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅜ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "40px", height: "58px"}}>ㅡ</button><button className="flex items-center justify-center rounded mx-0.5 text-base font-bold cursor-pointer select-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400" style={{width: "65.4px", height: "58px"}}>삭제</button></div>
            </div>
        </div>
        </>
      );
}

function Word({word}) {
    return (
        <div className="flex justify-center mb-1">
            <div className="w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded bg-white border-slate-200">{word.digit[0]}</div>
            <div className="w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded bg-white border-slate-200">{word.digit[1]}</div>
            <div className="w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded bg-white border-slate-200">{word.digit[2]}</div>
            <div className="w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded bg-white border-slate-200">{word.digit[3]}</div>
            <div className="w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded bg-white border-slate-200">{word.digit[4]}</div>
            <div className="w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded bg-white border-slate-200">{word.digit[5]}</div>
        </div>
    )
}

export default MainPage