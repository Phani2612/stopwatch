

import React, { useRef } from 'react'
import { useMemo } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faUndo } from '@fortawesome/free-solid-svg-icons';


function App() {



const [minute , setMinute] = React.useState(0)

const [second , setSecond] = React.useState(0)

const [milli , setmilli] = React.useState(0)

const [Pausse , setPause] = React.useState(true)






React.useEffect(function()
{

   const Millidata =  setInterval(function()
    {

     
      if(!Pausse)
      {

          
        setmilli(function(Previous)
        {
  
              if(Previous < 100)
              {
                   return Previous + 1 
              }
  
              else{
  
                return 0
              }
  
        })
      }
     


    

    },10)


return ()=>clearInterval(Millidata)

 

},[Pausse])


React.useEffect(function()
{

 const SecondData = setInterval(function()
  {
       

    if(!Pausse)
    {
        
      setSecond(function(previous1)
      {
        if(previous1 < 60)
        {
          return previous1 + 1
        }

        else{

           return 0
        }
           
      })
       
    }

        
         

         if(second === 59)
         {

              setMinute(function(previous2)
            {

                return previous2 + 1

            })
         }
        
         
  },1000)


  
  return ()=> clearInterval(SecondData)
  // clearInterval(SecondData)

},[second , Pausse])



function handlePause()
{

  
setPause(true)

     
}


function handleReset()
{
    setSecond(0)

    setmilli(0)

    setMinute(0)

    setPause(true)
}


function handleStart()
{
   setPause(false)
}


  
return (
  <div className="app-container">
    <div className="buttons-container">
      <button onClick={handleStart}>
        <FontAwesomeIcon icon={faPlay} />
        <span>Start</span>
      </button>
      <button onClick={handlePause}>
        <FontAwesomeIcon icon={faPause} />
        <span>Pause</span>
      </button>
      <button onClick={handleReset}>
        <FontAwesomeIcon icon={faUndo} />
        <span>Reset</span>
      </button>
    </div>
    <div className="timer">
      <h1>
        {minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}:{milli < 10 ? `0${milli}` : milli}
      </h1>
    </div>
  </div>
);
}

export default App
