/* eslint-disable import/no-anonymous-default-export */
import './Subscribe.css'

const InputSection = ()=>{

    return(<div >
        <input></input>
        <input></input>
        <button>SEND</button>
    </div>)
}




export default ()=>{
    
    return(<div className="subscribe-section">
        <h1>Subscribe Our Newsletter</h1>
        <InputSection/>
    </div>)
}