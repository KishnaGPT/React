import { useEffect, useState } from "react";
import './Stopwatch.css'
export function Stopwatch(){

    const [time, setTime] = useState(0);
    const [isRunning, setisRunning] = useState(false);
    const [isPaused, setisPaused] = useState(false);
    
    useEffect(() => {
    let timer
    if (isRunning && !isPaused) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isPaused]);

    const handleStart=()=> {
        setTime(0);
        setisRunning(true);
        setisPaused(false);
    }

    const handlePause=()=>{
        setisPaused(true);
    }

    const handleResume=()=>{
        setisPaused(false);
    }

    const handleStop=()=>{
        setisRunning(false);
        setTime(0);
        setisPaused(false);
    }

    return<>
        <div>
            <h1>StopWatch</h1>
            <div>{time} sec</div>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleResume}>Resume</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    </>
}