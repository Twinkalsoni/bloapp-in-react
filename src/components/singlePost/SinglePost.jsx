import './singlePost.css'
const singlePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src='https://media.istockphoto.com/photos/writing-in-notebook-closeup-picture-id1080259016?k=20&m=1080259016&s=612x612&w=0&h=sgVODsfYPU_oDWeDkfJZLgwEu6u95dP_6EQzlfmMX8E='
        alt='' className='singlePostImg' />
        <h1 className='singlePostTitle'>
         Contact
          <div className='singlePostEdit'>
            <i className='singlePostIcon far-fa-edit'></i>
            <i className='singlePostIcon far-fa-trash-alt'></i>

          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author: <b>Diyan</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Get this image on: istockphoto.com | License details
          Creator: Tanachot Credit: Getty Images/iStockphoto Copyright: Tanachot
          Want to know where this information comes from? Learn moreGet this image on: istockphoto.com | License details
          Creator: Tanachot|Credit: Getty Images/iStockphoto Copyright: Tanachot
          Want to know where this information comes from? Learn more Get this image on: istockphoto.com | License details
          Creator: Tanachot Credit: Getty Images/iStockphoto Copyright: Tanachot
          Want to know where this information comes from? Learn moreGet this image on: istockphoto.com | License details
          Creator: Tanachot|Credit: Getty Images/iStockphoto Copyright: Tanachot
          Want to know where this information comes from? Learn more Get this image on: istockphoto.com | License details
          Creator: Tanachot Credit: Getty Images/iStockphoto Copyright: Tanachot
          Want to know where this information comes from? Learn moreGet this image on: istockphoto.com | License details
          Creator: Tanachot|Credit: Getty Images/iStockphoto Copyright: Tanachot
          Want to know where this information comes from? Learn more</p>
      </div>
    </div>
  )
}

export default singlePost