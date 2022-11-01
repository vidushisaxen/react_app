import React from 'react'
import { useState} from 'react';
import Application from './application';

function Input() {
    const[fname,setFname]=useState();
    const[lname,setLname]=useState();
    const[sname,setSname]=useState();
    function first(event){
      setFname(event.target.value);
    }
    function last(event){
        setLname(event.target.value);
    }
    function school(event){
        setSname(event.target.value);
    }
  return (
    <div>
        {/* <input placeholder='Enter your first name' onChange={first}></input>
        <input placeholder='Enter your last name' onChange={last}></input> */}
        <marquee>Welcome, to application generator.</marquee>
        <div class="input-group">
  <span class="input-group-text">Name and roll no.</span>
  <input type="text" aria-label=" Name" class="form-control" onChange={first}></input>
  <input type="text" aria-label="Roll no." class="form-control" onChange={last}></input><hr></hr>
  <span class="input-group-text">School name</span>
  <input type="text" aria-label="School name" class="form-control" onChange={school}></input>
</div>
<Application name={fname} Rollno={lname} school={sname}/>
    </div>
  )
}

export default Input