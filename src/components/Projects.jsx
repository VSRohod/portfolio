function Projects(props){  
    return(
        <div id="projectsGroup">
            <div className="projectsItem" data-bs-toggle="modal" data-bs-target={props.projectName}>
                <img className="imagesX" src={props.projectLogo} alt=""/>
            </div>
        </div>
    )  
}

export default Projects