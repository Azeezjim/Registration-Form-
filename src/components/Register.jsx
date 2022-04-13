import  {useRef, useState, useEffect} from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[a-zA-Z0-9]{3,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Register() {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPed, setValidPed] = useState(false)
  const [userMatch, setuserMatch] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMeg, setErrMeg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.curreent.focus()
  }, [])

    useEffect(() => {
      const result = USER_REGEX.test(user)
      console.log("result", result);
      console.log("user", user);
      setValidName(result)
    }, [user])

    useEffect(() => {
      const result = PWD_REGEX.test(pwd)
      console.log("result", result);
      console.log("ped", pwd);
      setValidName(result)
      const match = pwd === matchPwd;
    }, [pwd, matchPwd])
    
    useEffect(() => {
      setErrMeg('')
    }, [user, pwd, matchPwd])

  return (
    <section>
       
    </section>
  )
}

export default Register