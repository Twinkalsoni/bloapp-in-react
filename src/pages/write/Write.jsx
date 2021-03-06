import './write.css'

const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src='https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                <i class="fa-solid fa-circle-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Add Title hear..' className='writeInput' autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell Your Story..' type="text" className='writeInput writeText'>
                </textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
        </div>
  )
}

export default Write