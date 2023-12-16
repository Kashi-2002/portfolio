import emailjs from '@emailjs/browser';
import {useState} from 'react'

const Cont=()=>{

    const [names, setnames] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const handlename = (event) => {
        setnames(event.target.value);
      };
      const handlemail = (event) => {
        setemail(event.target.value);
      };
      const handlemessage= (event) => {
        setmessage(event.target.value);
      };
      
    

    const sendFeedback= (event) =>{
        event.preventDefault(); 
        console.log(email);
        emailjs.send(
          'service_xsuo1kl',
          'template_n4gpk9b',
          {
            'names' : names,
            'email' : email,
            'message' : message
          },
          'eF2nBpkwmJYcXi61S'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
         }, (err) => {
            console.log('FAILED...', err);
         });
        }

    return (
       <div className="conts" id='Cont'>
         {/* <div class="testbox"> */}
         <div className="IconName">
            Click on the links below to redirect to my profile.
            <br></br>Waiting to see you there :)
         <div className="Icons">

<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kashishranjan2002@gmail.com" class="fa fa-google"></a>
<a href="https://www.linkedin.com/in/kashish-ranjan-599411215/" class="fa fa-linkedin"></a>
<a href="https://www.instagram.com/ranjan_kashish/" class="fa fa-instagram"></a>
<a href="https://github.com/Kashi-2002" class="fa fa-github"></a>
</div>
      </div>
      <form onSubmit={sendFeedback}>
        <p>Please fill the form for more discussion!</p>
        <div class="item">
          <label for="name">Name<span>*</span></label>
          <input id="name" type="text" name="name" value={names} onChange={handlename} required/>
        </div>
        <div class="item">
          <label for="email">Email Address<span>*</span></label>
          <input id="email" type="email" name="email" value={email} onChange={handlemail} required/>
        </div>
        <div class="item">
          <label for="Message">Message<span>*</span></label>
          <input id="Message" type="text" name="Message"  value={message} onChange={handlemessage}  required/>
        </div>

        <div class="btn-block">
          <button type="submit"  >SUBMIT</button>
        </div>
      </form>

        </div>
    )
};
export default Cont;



