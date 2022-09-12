import { Fragment, useEffect, useState } from "react"
import axios from "axios"


const Register = () => {

  const [titleVal, setTitleVal] = useState('')
  const [bodyVal, setbodyVal] = useState('')
  const [userIdVal, setuserIdVal] = useState(0)
  const [userData, setUserData] = useState('')
  const [check, setCheck] = useState(true)
  const [isSent, setIsSent] = useState(false)
  const [check2, setCheck2] = useState(true)
  const [isSentUpdate, setIsSentUpdate] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: {titleVal},
        body: {bodyVal},
        userId: {userIdVal}
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => setUserData(data))

    return () => {
      // console.log('yes')
    }

  }, [isSent])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: { titleVal },
        body: { bodyVal },
        userId: { userIdVal }
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => setUserData(data))

    return () => {
      // console.log('yes')
    }

  }, [isSentUpdate])
  // console.log(userData)

  const handleSubmit = () => {

    if (titleVal && bodyVal !== '') {
      setIsSent(!isSent)
      setCheck2(false)
    
      setTimeout(() => {
        setTitleVal('')
        setbodyVal('')
        setuserIdVal(0)
      }, 100)
    }
    else {
      alert('form has empty field(s)')
    }
  }

  const handleEdit = () => {
    setCheck(false)

    setTimeout(() => {
      setTitleVal('')
      setbodyVal('')
      setuserIdVal(0)
    }, 100)
  }

  const handleUpdate = () => {
    setCheck(false)
    setIsSentUpdate(!isSentUpdate)
  }

  return (<Fragment>
    <div className='formWrapper'>
      
      <form className='form'>

        <header className="header">
          {check ? <h2>Register</h2> : <h2>Update</h2>}
        </header>
        
        <div className="formChilds">
          {check ? <input
            placeholder="Title"
            type='text'
            value={titleVal}
            onChange={(e) => { setTitleVal(e.target.value) }} />
          :
            <input
              type='text'
              value={titleVal}
              // value={userData.title.titleVal}
              onChange={(e) => { setTitleVal(e.target.value) }} />}
        </div>

        <div className="formChilds">
          {check ? <input
            placeholder="Body"
            type='text'
            value={bodyVal}
            onChange={(e) => { setbodyVal(e.target.value) }} />
          : <input
              type='text'
              value={bodyVal}
            // value={userData.body.bodyVal}
            onChange={(e) => { setbodyVal(e.target.value) }} />}
        </div>

        <div className="formChilds">
          {check ? <input
            placeholder="UserID"
            type='number'
            value={userIdVal}
            onChange={(e) => { setuserIdVal(e.target.value) }} />
          : <input
              type='number'
              value={userIdVal}
            // value={userData.userId.userIdVal}
            onChange={(e) => { setuserIdVal(e.target.value) }}
             />}
        </div>

        <div className="formChilds button">
          {check ? <button
            onClick={(e) => { e.preventDefault(); handleSubmit() }}>Submit</button>
          : 
            <button onClick={(e) => { e.preventDefault(); handleUpdate() }}>Update</button>}
        </div>
       
      </form>

      <section>
        {check2 ? <h2>First, fill the form please!</h2>
          
        : 
          <div className="userInfo">
            <h2>Change your Info</h2  >
            <input type='text' value={userData.title.titleVal} />
            <input type='text' value={userData.body.bodyVal} />
            <input type='number' value={userData.userId.userIdVal} />
            <div className="button">
              <button className="editBtn" onClick={(e) => { e.preventDefault(); { handleEdit() } }}>Edit</button></div>
           
          </div>
        }
       
        {/* {check2 ? <h2>Fill the form first please!</h2> : <pre>{JSON.stringify(userData,null,2)}</pre>} */}
      </section>

    </div>

  </Fragment>)
}

export default Register