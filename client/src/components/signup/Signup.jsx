import './signup.css'

const Signup = () => {
  return (
    <div className='signup'>
    <h1>Signup</h1>
    <form>
      <input type={'username'} placeholder={'Username'}/>
      <input type={'email'} placeholder={'Email'}/>
      <input type={'password'} placeholder={'Password'}/>
      <button type={'submit'} className='btn'>Signup</button>
    </form>
  </div>
  )
}

export default Signup