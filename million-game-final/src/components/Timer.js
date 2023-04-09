import { useEffect, useState } from "react";



const Timer=function({setFinish }){

    const [time,setTime]=useState(30) ; 
    
    useEffect(()=>{
        if(time===0) {
            setFinish(true) ;
            return ; 
        }


        const inter=setInterval(()=>{
            setTime(prev=>(prev-1)) ;
        },1000) ;

        return ()=>{clearInterval(inter)}
    },[time,setFinish]);
    return(
        <div className="timer">{time}</div>
    )
} ;
export default Timer ; 