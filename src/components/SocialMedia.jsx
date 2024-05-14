import SocialMediaGithub from "./../../public/images/iconsSocialMedia/github.svg";

function SocialMedia(){
    return(
        <a href="https://github.com/VSRohod">
            <div className="socialMediaItem middleCenter colummAlign">
                <img src={SocialMediaGithub} alt=""/>
                <p className="whiteText">@VSRohod</p>
            </div>
        </a>
    )
}

export default SocialMedia;