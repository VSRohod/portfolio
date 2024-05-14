import notePageScreenShot from './../../public/images/projects/notePage/dontpageScreenShot.png';
import IconsHTML from './../../public/images/tools/coding/HTML.svg';
import IconsCSS from './../../public/images/tools/coding/CSS.svg';
import IconsJS from './../../public/images/tools/coding/JS.svg';

function Modal(){
    return(
    <div className="modal fade" id="notePage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">NotePage</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <img className="imagesX" src={notePageScreenShot} alt=""/>
                <p>É um site de bloco de notas simples para que possa escrever e salvar suas anotações e ainda possibilita o download do bloco de notas para o usuário!</p>
                <h4>Tecnologias utilizadas</h4>
                <img src={IconsHTML} alt=""/>
                <img src={IconsCSS} alt=""/>
                <img src={IconsJS} alt=""/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
              <a href="https://github.com/VSRohod/NotePage" rel="noreferrer" target="_blank">
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