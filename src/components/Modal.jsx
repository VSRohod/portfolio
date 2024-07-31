function Modal(props){
    return(
    <div className="modal fade" id={props.projectName} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">{props.projectName}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <img className="imagesX" src={props.projectImage} alt=""/>
                <p>{props.projectDesc}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
              <a href={props.projectGitLink} rel="noreferrer" target="_blank">
                <button type="button" className="btn btn-primary">Visite o repositório do projeto</button>
              </a>
              <a href="https://vsrohod.github.io/NotePage/" rel="noreferrer" target="_blank">
                <button type="button" className="btn btn-success">Visite o site!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal