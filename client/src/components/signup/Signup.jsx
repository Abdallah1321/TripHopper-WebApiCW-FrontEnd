import './signup.css'

const Signup = () => {
  return (
    <div className='signup'>
    <h1>Signup</h1>
    <form>
      <input type={'email'} placeholder={'Email'}/>
      <input type={'password'} placeholder={'Password'}/>
      <input type={'password'} placeholder={'Confirm Password'}/>
      <button type={'submit'}>Signup</button>
    </form>
  </div>
  )
}

export default Signup