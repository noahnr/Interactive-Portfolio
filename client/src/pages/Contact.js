// import React from "react";
// // import Navbar from "../Components/Navbar"
// import "./app.css" 

// function Contact() {
//   return (
//     <>
//   <div class="container">
//     <form action="action_page.php" >
//       <label for="fname">First Name</label>
//       <input type="text" id="fname" name="firstname" placeholder="Your name.." />
//         <label for="lname">Last Name</label>
//         <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
//           <label for="country">Country</label>
//           <select id="country" name="country">
//             <option value="australia">Australia</option>
//             <option value="canada">Canada</option>
//             <option value="usa">USA</option>
//           </select>
//           <label for="subject">Subject</label>
//           <textarea id="subject" name="subject" placeholder="Feel free to ask questions! Now is your chance to tell us your brick breaker score!" style="height:200px"></textarea>
//           <input type="submit" value="Submit" />
//           <p>
//             Email: <br>
//             <a href="mailto: noahsoukupraesch@gmail.com">noahsoukupraesch@gmail.com</a> <br>
//             Phone: <br>
//             <a href="tel:+2106214482">(210)-621-4482</a>
//           </p>
//           </form>
//         </div>
//         </>
//   );
//   }

// export default Contact;
import React from "react";
import "./app.css" 

function contact() {
    return (
     <>
  <div class="container">
    <form action="action_page.php" >
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Feel free to ask questions! Now is your chance to tell us your brick breaker score!" style={{height:'200px'}}></textarea>
          <input type="submit" value="Submit" />
          <p>
            Email: 
            <a href="mailto: noahsoukupraesch@gmail.com">noahsoukupraesch@gmail.com</a>
            Phone: 
            <a href="tel:+2106214482">(210)-621-4482</a>
          </p>
          </form>
        </div>
        </>
    );
}

export default contact;
