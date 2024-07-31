// components
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import SocialMedia from "./components/SocialMedia";
import Tools from "./components/tools";

// images
import Frost from "./Assets/images/me/frost.png";
import AboutMeFoto from "./Assets/images/me/me.jpeg";
import AboutMeFotoFursona from "./Assets/images/me/fursuit.jpg";
import SetaBaixo from "./Assets/images/icons/arrow-down-solid.svg";

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

            <section id="aboutMe" className="aboutMe">
                <aside className="middleCenter aboutMeImg">
                    <img className="imagesY photosRounded aboutMeImgPhoto" src={AboutMeFoto} alt=""/>
                </aside>
                <aside className="colummAlign aboutMeText">
                    <h4>SOBRE MIM</h4>
                    <p>Sou um jovem programador em busca de mais experiências profissionais no ramo da Tecnologia, Design e em DevOps. Viciado em rock, videogames e em descobrir novas coisas!</p>
                    <p>Também acostumado a trabalhar em equipes e sempre buscando a maior e melhor eficiência dentro do ambiente de trabalho!</p>
                    <p>Comecei como competidor na <a href="https://www.senairs.org.br/olimpiada-do-conhecimento-e-worldskills">Olimpíada do conhecimento </a> e logo em seguida sendo representante do estado de Distrito federeal(DF) na Seletiva Nacional da <a href="https://worldskills.org/">WorldSkills.</a></p>
                    <p>Fui estudante de ADS (Análise e Desenvolvimento de Sistemas), sou instrutor da <a href="https://www.sistemafibra.org.br/senai/educacao/inova-tech">Inovatech - SENAI</a> dos cursos de Front-End e programação!</p>
                </aside>
            </section>

            <section className="aboutMe">
                <aside className="colummAlign aboutMeText">
                    <h4>EXPRESSÃO ARTÍSTICA</h4>
                    <p>Sou entusiasta na cultura furry e meu personagem é um lobo branco com cabelo azul. Tendo esse lado como grande inspiração tanto para designs mais inventivos e tanto para a minha parte artística de diversos projetos que levo durante meu trabalho, sendo criativo e ao mesmo tempo fazendo parte de uma identidade visual.</p>
                </aside>
                <aside className="middleCenter aboutMeImg">
                    <img className="imagesY photosRounded aboutMeImgPhoto" src={AboutMeFotoFursona} alt=""/>
                </aside>
            </section>

            
            <section id="experience" className="colummAlign">
                <h4>EXPERIÊNCIA PROFISSIONAL</h4>

                <section id="experienceTopicsGroup" className="colummAlign middleCenter">
                    <Experience experiencePhoto="https://i.imgur.com/k8ZxfPy.png" experienceTitle="COMPETIDOR DA SELETIVA WORLDSKILLS" experienceText="Participei da olímpiada do conhecimento na área #17 - Web Design, após treinamentos diários tive a oportunidade de representar o estado DF na seletiva nacional WorldSkills, ficando em 4° lugar em âmbito nacional!" />
                    <Experience experiencePhoto="https://i.imgur.com/LwjXC57.jpeg" experienceTitle="INSTRUTOR DE FRONT-END E 'WEB DESIGN'" experienceText="Fui instrutor desde 25/07/2022 onde pude estar presente em sala de aula compartilhando e facilitando o acesso aos conhecimentos que no decorrer da minha carreira acabei adquirindo. Atendendo desde turmas do NEM (Novo ensino médio) e até turmas do exército brasileiro!" />
                </section>
            
            </section>
            
            <section id="projects" className="middleCenter colummAlign">
                <h4>PROJETOS DESTAQUE</h4>

                <Projects projectName="#NotePage" projectLogo="https://i.imgur.com/YzbLJd0.png" />

            </section>

            <section id="tools" className="middleCenter colummAlign">
                <h4>FERRAMENTAS QUE DOMINO</h4>

                <div id="toolsGroup" className="middleCenter flex">
                    <Tools nome="HTML" cor="orange" />
                    <Tools nome="CSS" cor="blue2" />
                    <Tools nome="PHP" cor="purple" />
                    <Tools nome="JAVASCRIPT" cor="yellow" />
                </div>
            </section>

            <section id="contact" className="middleCenter colummAlign">
                <h4 className="whiteText">CONTATO</h4>
                <p className="whiteText margin1">Entre em contato! Aqui estão minhas redes sociais!</p>
                
                <div id="socialMediaGroup" className="padding1 d-flex flex-wrap">
                    <SocialMedia link="https://github.com/VSRohod" username="@VSRohod" classIcon="bi-github" />
                    <SocialMedia link="https://www.instagram.com/victor_rohod/" username="@VSRohod" classIcon="bi-instagram" />
                    <SocialMedia link="mailto:victorsantosrohod@gmail.com" username="victorsantosrohod@gmail.com" classIcon="bi-envelope" />
                </div>
            
            </section>
        </main>

    <Footer />
    <Modal projectName="NotePage" projectImage="https://i.imgur.com/34Ejlxj.png" projectGitLink="https://github.com/VSRohod/NotePage" projectLink="https://vsrohod.github.io/NotePage/" projectDesc="É um site de bloco de notas simples para que possa escrever e salvar suas anotações e ainda possibilita o download do bloco de notas para o usuário!"/>
    
    </div>
  );
}

export default App;
