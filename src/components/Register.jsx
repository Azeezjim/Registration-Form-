import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z0-9]{3,20}$/;
const PWD_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () =>{
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocuse, setPwdFocuse] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMeg, setErrMeg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log("result", result);
    console.log("user", user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log("result", result);
    console.log("pwd", pwd);
    setValidName(result);
    setMatchPwd(pwd === matchPwd);
    // const match = pwd === matchPwd;
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMeg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMeg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMeg}
      </p>
      <h1>Register</h1>
      <form>

        <label htmlFor="username">Username! 
        <span className={validName ? "valid" :"hide" }>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validName || !user ? "hide" :"invalid" }>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        </label>
        <input 
          type="text"
          id="username"
          ref={userRef} 
          autoComplete="off" 
          onChange={e => setUser(e.target.value)}
          required
          aria-invalid={validName ? "flase" : "true"}
          ariad-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"} >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 21 characters, letters, numbers, underscore, hyphens only<br />
          Must begin with a latter. <br />
        </p>


        <label htmlFor="password">Password:
        <span className={validPwd ? "valid" :"hide" }>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validPwd || !pwd ? "hide" :"invalid" }>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        </label>
        <input type="password" 
          id="password" 
          onChange={e => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "flase" : "true"}
          ariad-describedby="pwdnote"
          onFocus={() => setPwdFocuse(true)}
          onBlur={() => setPwdFocuse(false)}
        />
          <p id="pwdnote" className={pwdFocuse && !validPwd ? "instructions" : "offscreen"} >
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 21 characters: <span aria-label="exclamation mark">!</span> 
          <span aria-label="at symble">@, </span>
          <span aria-label="hashtag">#, </span>
          <span aria-label="doller sign">$, </span>
          <span aria-label="paecent">%</span>
          <br />
          Must begin with a latter. <br />
        </p>


        <label htmlFor="password">Confirm Password:
        <span className={validMatch && matchPwd ? "valid" :"hide" }>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validMatch || !matchPwd ? "hide" :"invalid" }>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        </label>
        <input 
          type="password" 
          id="confirm_pwd" 
          onChange={e => setPwd(e.target.value)}
          required
          aria-invalid={validMatch ? "flase" : "true"}
          ariad-describedby="confirmnote"
          onFocus={() => setPwdFocuse(true)}
          onBlur={() => setPwdFocuse(false)}
        />
          <p id="pwdnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"} >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password field.
        </p> 

        <button disabled={!validName || !validPwd || !validMatch ? true : false }>
          Sign Up
          
        </button>
        <p>
          Already registered? <br />
          <span className="line">
            {/* put a router link  */}
            <a href="#"> Sign In</a>
          </span>
        </p>
      </form> 
    </section>
  );
}

export default Register;
