import { getCharsetNumber } from 'mysql/lib/ConnectionConfig';
import { useState } from 'react'
import './AddUser.css';
export default function AddUser() {

    const [first_name, setfirst_name] = useState('')
    const [surname, setsurname] = useState('')
    const [DOB, setDOB] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [genpass, setgenpass] = useState('')
    const [password2, setpassword2] = useState('')

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [matchingpassworderror, setmatchingpassworderror] = useState(false);
    const [passwordconfirmation, setConfirmPass] = useState(false);
    const [enterpassworderror, setEnterPasswordError] = useState(false);
    const [enterotherpassworderror, setEnterOtherPasswordError] = useState(false);



    const handlefirst_name = (e) => {
        setfirst_name(e.target.value);
        setSubmitted(false);
      };

    const handlesurname = (e) => {
        setsurname(e.target.value);
        setSubmitted(false);
      };

    const handleDOB = (e) => {
        setDOB(e.target.value);
        setSubmitted(false);
      };

    const handleemail = (e) => {
        setemail(e.target.value);
        setSubmitted(false);
      };

    const handlepassword = (e) => {
        setpassword(e.target.value);
        setSubmitted(false);
      };

    const handlepassword2 = (e) => {
        setpassword2(e.target.value);
        setSubmitted(false);
      };

    const handlegenpass = (e) => {
        setgenpass(e.target.value);
        setSubmitted(false);
      };

    const handleGeneratePassword = (e) => {
        var mask = '';
        var chars = 'aA#!';
        var length = 16;
        if (chars.indexOf('a')>-1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A')>-1) mask += 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
        if (chars.indexOf('#')>-1) mask += '0123456789';
        if (chars.indexOf('!')>-1) mask += '!"£$%^&*)';
        var result = '';
        for (var i= length; i>0; --i) result += mask[Math.round(Math.random() * (mask.length -1))];
        setgenpass(result);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (first_name === '' || surname === '' || DOB === '' || email === '') {
          setError(true);
          alert("Please fill in all the fields")
        } else if (password === '' && password2 === '' && genpass === '') {
          setEnterPasswordError(true)
          alert("Please enter your own password or click generate password (this will be used as your password instead)")
        } else if (password === '' && password2 === '' && !(genpass === '')) {
          setEnterPasswordError(false)
          setpassword(genpass)
          setpassword2(genpass)
        } else if (password === '' && !(password2 === '')) {
          setEnterPasswordError(false)
          setEnterOtherPasswordError(true)
          alert("Please enter matching passwords in both the password and confirm password fields")
        } else if (password2 === '' && !(password === '')) {
          setEnterPasswordError(false)
          setEnterOtherPasswordError(true)
          alert("Please enter matching passwords in both the password and confirm password fields")
        } else if (!(password2 === '') && !(password === '')) {
          setEnterPasswordError(false)
          setEnterOtherPasswordError(false)
          if (String(password) == String(password2)) {
              setConfirmPass(true)
              setSubmitted(true);
          } else {
            setConfirmPass(false)
            alert("Please enter matching passwords")
          }
          // if (!passwordconfirmation) {
          //   setmatchingpassworderror(true);
          //   alert("Please enter matching passwords")
          // }
        }
          setError(false);
          setmatchingpassworderror(false);
          setEnterPasswordError(false)
          setEnterOtherPasswordError(false)
          // const first_name = await bcrypt.hash(first_name, 10);
          // const surname = await bcrypt.hash(surname, 10);
          // const DOB = await bcrypt.hash(DOB, 10);
          // const email = await bcrypt.hash(email, 10);
          // const password = await bcrypt.hash(password, 10);

          // Axios.post("http://localhost:3000/AddUser", {
          //   first_name: first_name,
          //   surname: surname,
          //   DOB: DOB,
          //   email: email,
          //   password: password
          // })

        // if (error == true) {
        //   alert("Please fill in all the fields")
        // }
        // if (matchingpassworderror == true) {
        //   alert("Please enter matching passwords")
        // }
        // if (enterpassworderror == true) {
        //   alert("Please enter your own password or click generate password (this will be used as your password instead)")
        // }
        // if (enterotherpassworderror == true) {
        //   alert("Please enter matching passwords in both the password and confirm password fields")
        // }
        if (submitted == true) {
          alert(first_name + " successfully registered!")
        }
      };

    return (
        <div className="form">
          <div>
            <h1>User Registration</h1>
          </div>
     
          <form>
            {/* Labels and inputs for form data */}
            <label id = 'firstname' className="label">First Name</label>
            <br/>
            <input required onChange={handlefirst_name} className="input"
              value={first_name} type="text" />
            <br/>
            <br/>
            <label id = 'surname' className="label">Surname</label>
            <br/>
            <input required onChange={handlesurname} className="input"
              value={surname} type="text" />
            <br/>
            <br/>
            <label id = 'DOB' className="label">DOB</label>
            <br/>
            <input required onChange={handleDOB} className="input"
              value={DOB} type="date" />
            <br/>
            <br/>
            <label id = 'email' className="label">E-Mail</label>
            <br/>
            <input required onChange={handleemail} className="input"
              value={email} type="email" />
            <br/>
            <br/>
            <label id = 'password' className="label">Password</label>
            <br/>
            <input required onChange={handlepassword} className="input"
              value={password} type="password" />
            <br/>
            <br/>
            <label id = 'confirmpassword' className="label">Confirm password</label>
            <br/>
            <input required onChange={handlepassword2} className="input"
               value={password2} type="password" />
            <br/>
            <br/>
            <label id = 'generatepassword' className="label">Generated password</label>
            <br/>
            <input onChange={handlegenpass} className="input"
               type="text" value= {genpass}/>
            <br/>
            <br/>
            <button onClick={handleGeneratePassword} className="btn" type="button">
              Generate
            </button>
            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
            <br/>
          </form>
        </div>
    );
}