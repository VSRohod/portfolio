// components
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Modal from "./components/Modal";
import SocialMedia from "./components/SocialMedia";
import Tools from "./components/tools";

// images
import Frost from "./../public/images/me/frost.png";
import NotePageLogo from "../public/images/projects/notePage/notePageLogo.png";
import AboutMeFoto from "../public/images/me/me.jpeg";
import SetaBaixo from "../public/images/icons/arrow-down-solid.svg";


function App() {
  return (
    <div id="content">
        <main>
            <section id="intro" className="spaceBetweenX">
                <aside id="introTitle" className="spaceBetweenX colummAlign">
                    <h1>Victor Santos Rohod</h1>
                    <h3>⭐ Fullstack Developer ⭐</h3>
                    <a href="#aboutMe">
                        <img className="navIcon animate__animated animate__tada" src={SetaBaixo} alt=""/>
                    </a>
                </aside>
                <aside id="introImage" className="middleCenter">
                    <img src={Frost} alt=""/>
                </aside>
            </section>

            <section id="aboutMe">
                <aside id="aboutMeImg" className="middleCenter">
                    <img id="aboutMeImgPhoto" className="imagesY photosRounded" src={AboutMeFoto} alt=""/>
                </aside>
                <aside id="aboutMeText" className="colummAlign">
                    <h4>SOBRE MIM</h4>
                    <p>Sou um jovem programador em busca de mais experiências profissionais no ramo da Tecnologia, Design e em DevOps. Viciado em rock, videogames e em descobrir novas coisas!</p>
                    <p>Também acostumado a trabalhar em equipes e sempre buscando a maior e melhor eficiência dentro do ambiente de trabalho!</p>
                    <p>Comecei como competidor na <a href="https://www.senairs.org.br/olimpiada-do-conhecimento-e-worldskills">Olimpíada do conhecimento </a> e logo em seguida sendo representante do estado de Distrito federeal(DF) na Seletiva Nacional da <a href="https://worldskills.org/">WorldSkills.</a></p>
                    <p>Atualmente além de estudante de ADS (Análise e Desenvolvimento de Sistemas), sou instrutor da <a href="https://www.sistemafibra.org.br/senai/educacao/inova-tech">Inovatech - SENAI</a> dos cursos de Front-End e programação!</p>
                </aside>
            </section>
            
            <section id="experience" className="colummAlign">
                <h4>EXPERIÊNCIA PROFISSIONAL</h4>

                <section id="experienceTopicsGroup" className="colummAlign middleCenter">
                    <Experience />
                </section>
            
            </section>
            
            <section id="projects" className="middleCenter colummAlign">
                <h4>PROJETOS DESTAQUE</h4>

                <div id="projectsGroup">
                    <div className="projectsItem" id="notePageBtn" data-bs-toggle="modal" data-bs-target="#notePage">
                        <img className="imagesX" src={NotePageLogo} alt=""/>
                    </div>
                </div>
            </section>

            <section id="tools" className="middleCenter colummAlign">
                <h4>FERRAMENTAS QUE DOMINO</h4>

                <div id="toolsGroup" className="middleCenter colummAlign">
                    <Tools />
                </div>
            </section>

            <section id="contact" className="middleCenter colummAlign">
                <h4 className="whiteText">CONTATO</h4>
                <p className="whiteText margin1">Entre em contato! Aqui estão minhas redes sociais!</p>
                
                <div id="socialMediaGroup" className="padding1">
                    <SocialMedia />
                </div>
            
            </section>
        </main>

    <Footer />
    <Modal />
    
    </div>
  );
}

export default App;
