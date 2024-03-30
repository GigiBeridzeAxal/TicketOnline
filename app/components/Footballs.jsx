import React from 'react'

export default function Footballs() {
  return (
    <>
  
       <div className="football">
       <div className="footballtittle">Football</div>
        <div className="footballframe">
         
         <div className="georgiavgreece">
            <img src={'/georgiavgreece.webp'} width={300} height={300} alt="" />
            <div className="info">
                <div className="firstline"><div className="tittle">Georgia Vs Greece</div>  <div className="text-emerald-500  price">20$</div> </div>
                <div className="location"> <img src={'/Location.png'} width={20} height={20} alt="" /> Georgia</div>
            </div>
            
            
         </div>
         <div className="georgiavgreece">
            <img src={'/Germanyv.png'} width={300} height={300} alt="" />
            <div className="info">
                <div className="firstline"><div className="tittle">Germany Vs Schotland</div>  <div className="text-emerald-500  price">1500$</div> </div>
                <div className="location"> <img src={'/Location.png'} width={20} height={20} alt="" /> Germany</div>
            </div>
            
            
         </div>
         

        </div>
        
    </div>
    
    </>
 
  )
}
