function Projects(props){  
    return(
        <div className="projectsItem" data-bs-toggle="modal" data-bs-target={props.projectName}>
            <img className="imagesX" src={props.projectLogo} alt=""/>
        </div>
    )  
}

export default Projects