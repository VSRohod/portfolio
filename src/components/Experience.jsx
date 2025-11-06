function ExperienceTopics(props){
    return (
        <div className="experienceTopic pad1">
            <aside className="experinceImage middleCenter">
                <img className="experiencePhoto photosBorderRounded" src={props.experiencePhoto} alt=""/>
            </aside>
            <aside className="experinceDetails colummAlign">
                <h5 className="experienceTitle whiteText">{props.experienceTitle}</h5>
                <p className="experienceText whiteText">{props.experienceText}</p>
            </aside>
        </div>
    )
}

export default ExperienceTopics