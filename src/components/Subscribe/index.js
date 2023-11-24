/* eslint-disable import/no-anonymous-default-export */
import './Subscribe.css'

const InputSection = ()=>{

    return(<div >
        <input placeholder='Name:' className='input-name'></input>
        <input placeholder='Enter Your Email' className='input-Email'></input>
        <button className='sub-btn'>SEND</button>
    </div>)
}




export default ()=>{
    
    return(<div className="subscribe-section">
        <h1 style={{marginBottom : '3rem'}}>Subscribe Our Newsletter</h1>
        <InputSection/>
    </div>)
}