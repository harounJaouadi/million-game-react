import { useEffect, useState } from "react";




const Timer=function({timerIsCalc,SetTimerIsCalc,setValid}){

    const [time,setTime]=useState(30) ;
    if(time===0){
        setValid(false) ;
    } 

    useEffect(()=>{
        if (timerIsCalc){

            const interval=setInterval(()=>{
                setTime(prev=>prev-1) ;
            },1000);
            return ()=>{clearInterval(interval)} ;
            
            
        }
        else{
            setTime(30) ; 

        }
        
    },[timerIsCalc]);

    return (
        <div className="timer">{time}</div>
    ) ;
} ; 

export default Timer ; 