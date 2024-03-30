import React from 'react'

export default function Header() {
  return (
    <div className="header">
      
       
       <div className="headerframe">

       <div className="left">
        <img src={'/CombiTicket.png'} width={50} height={90} alt="" />
        <div>Ticket Online</div>
       </div>
       <div className="right">
        <div className="footballer">ფეხბურთი</div>
        <div className="ufc">უეფსი</div>
        <div className="gama">გამა</div>
        <div className="movie">კინო</div>
        <div className="btns">
            <div className="signin"><button>შესვლა</button></div>
            <div className="signup"><button>დარეგისტრირდი</button></div>
        </div>

       </div>
       </div>
    
 
          
            
            
    </div>
  )
}
