import { Fragment, useState } from "react"


const Register = () => {

  const [titleVal, setTitleVal] = useState('')
  const [bodyVal, setbodyVal] = useState('')
  const [userIdVal, setuserIdVal] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit = () => {
    
  }


  return (<Fragment>
    <div className='formWrapper'>
      <header className="header">
        <h1>Register</h1>
      </header>
      
      <form className='form'>

        <div className="formChilds">
          <input placeholder="Title" type='text' value={titleVal} onChange={(e) => {setTitleVal(e.target.value)}}/>
        </div>

        <div className="formChilds">
          <input placeholder="Body" type='text' value={bodyVal} onChange={(e) => { setbodyVal(e.target.value)}}/>
        </div>

        <div className="formChilds">
          <input placeholder="UserID" type='number' value={userIdVal} onChange={(e) => { setuserIdVal(e.target.value) }} />
        </div>

        <div className="formChilds button">
          <button onClick={handleSubmit}>Submit</button>
        </div>
       
        </form>

    </div>

  </Fragment>)
}

export default Register