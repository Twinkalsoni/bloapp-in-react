import './sidebar.css'

const sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>
                    ABOUT ME
                </span>
                <img src='data:image/jpeg;base64,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' alt='' />
                <p className='P'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>
                    CATEGORIES
                </span>
                <ul className="sidebarlist">
                    <li className="sidebarlistItem">Life</li>
                    <li className="sidebarlistItem">Music</li>
                    <li className="sidebarlistItem">Style</li>
                    <li className="sidebarlistItem">Sports</li>
                    <li className="sidebarlistItem">Tech</li>
                    <li className="sidebarlistItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem"></div>
            <span className='sidebarTitle'>
                CATEGORIES
            </span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab  fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
        </div>
    )
}

export default sidebar