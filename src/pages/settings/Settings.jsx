import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingUpdateTitle'>
                        Update Your Account
                    </span>
                    <span className='settingDeleteTitle'>
                        Delete Account
                    </span>
                </div>
                <form className="settingsForm">
                    <label>Profile picture</label>
                    <div className='settingsPP'>
                        <img src='https://i.pinimg.com/originals/ee/50/de/ee50dec983d90280a90a40afbe5be29d.jpg' alt='' />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Name' />
                    <label>Email</label>
                    <input type="email" placeholder='name@gmail.com' />
                    <label>Password</label>
                    <input type="password" placeholder='......' />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />

        </div>
    )
}

export default Settings