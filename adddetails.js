import { useRef, useState } from "react";

const AddDetails=()=>{
    const [btn,setbtn]=useState('SUBMIT')
    const [alert,setalert]=useState()
    const pname=useRef()
    const pmail=useRef()
    const pnum=useRef()
    const pgender=useRef()
    const paddress=useRef()
    function pushdata(){
        const meetname=pname.current.value
        const meetmail=pmail.current.value
        const meetnum=pnum.current.value
        const meetgender=pgender.current.value
        const meetaddress=paddress.current.value
        if(meetname==''|| meetmail==''|| meetnum==''|| meetgender==''|| meetaddress==''){
            setalert('please fill all the fields !!')


        }
        else{
            const madhanObject={
                meetName:meetname,
                meetMail:meetmail,
                meetNum:meetnum,
                meetGen:meetgender,
                meetAdd:meetaddress
            }
            fetch('https://hiring-3e473-default-rtdb.firebaseio.com/hiring.json',{
                method:'post',
                body:JSON.stringify(madhanObject)
                
            }).then(()=>{
                setbtn('SUBMITTED')
            })
        }
        
    }
    return <div className="adddetails">
         <h1 className="add-title">This is amazon , add your details...</h1>
         <div className="data">
            <input className="text" type="text" placeholder="Enter your name.." ref={pname}></input>
            <input className="text" type="text" placeholder="Enter your mail.." ref={pmail}></input>
            <input className="text" type="number" placeholder="Enter your mobile num.." ref={pnum}></input>
            <input className="text" type="text" placeholder="Enter your gender.." ref={pgender}></input>
            <input className="text" type="text" placeholder="Enter your address.." ref={paddress}></input>
            <p className="alert">{alert}</p>
            <button className="add-btn" onClick={pushdata} >{btn}</button>
        </div>
    </div>
  
  }
  export default AddDetails;