function SocialMedia(props){
    let socialIcon = "bi "+props.classIcon
    return(
        <a href={props.link}>
            <div className="socialMediaItem middleCenter colummAlign">
                <i className={socialIcon} style={{ fontSize: 40, color: "white"}}></i>
                <p className="whiteText">{props.username}</p>
            </div>
        </a>
    )
}

export default SocialMedia;