import React from 'react'
import date from 'date-and-time';

function Application(props) {
    const now = new Date();
    const pattern = date.format(new Date(), 'DD-MM-YYYY'); 
  

  return (
    <div className='paper'>
To,<br></br>

The Principal,<br></br>

{props.school},<br></br>

{pattern}<br></br>

<b>Subject: Application for leave.</b><br></br>

Sir/Madam,<br></br>

With due respect, I beg to say that I am not in a state to attend the school as I am down due to the viral fever. I have been advised by our family doctor that I have to take proper rest for at least [number of days] days. Therefore, kindly grant me leave for [number of days]. I shall be really thankful to you.<br></br>

Thanking you,<br></br>

Yours obediently,<br></br>

{props.name}<br></br>
{props.Rollno}<br></br>
    </div>
  )
}

export default Application