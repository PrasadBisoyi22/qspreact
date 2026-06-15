import './card.css'

const Card = (getdata) => {

    return (
        <div className="Container">
            <div className="top_background"></div>
            <div className="Image">
                <img src={getdata.senddata.img} alt="User Profile" />
            </div>
            <div className="data_container">
                <div className="header_actions">
                    <div className='editprofile'>
                        <i className="fa-solid fa-pen"></i> Edit Profile
                    </div>
                </div>
                <div className='intoduction'>
                    <div>
                    <h2 className="profile_name">
                        {getdata.senddata.name} 
                        <span className="blue_tag"><i className="fa-solid fa-circle-check"></i></span>
                    </h2>
                    <span className="username_handle">{getdata.senddata.username}</span>
                    </div>
                    <div className="follow_group">
                        <button className="btn_follow"><i className="fa-solid fa-plus"></i> Follow</button>
                        <button className="btn_msg"><i className="fa-regular fa-comment"></i></button>
                    </div>
                </div>
                <div className='Desc'>
                    <h4 className="desc_title">About</h4>
                    <p className="desc_text">{getdata.senddata.bio}</p>
                </div>
                <div className='stats'>
                    <div className="stat_block">
                        <span className="stat_num">{getdata.senddata.stats.post}</span>
                        <span className="stat_lbl">Post</span>
                    </div>
                    <div className="stat_block">
                        <span className="stat_num">{getdata.senddata.stats.following}</span>
                        <span className="stat_lbl">Following</span>
                    </div>
                    <div className="stat_block">
                        <span className="stat_num">{getdata.senddata.stats.followers}</span>
                        <span className="stat_lbl">Followers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;    