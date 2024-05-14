import competidor2 from "./../../public/images/experience/competidor2.png";

function ExperienceTopics(){
    return (
        <div className="experienceTopic pad1">
            <aside className="experinceImage middleCenter">
                <img className="experiencePhoto photosRounded" src={competidor2} alt=""/>
            </aside>
            <aside className="experinceDetails colummAlign">
                <h5 className="experienceTitle whiteText">COMPETIDOR DA SELETIVA WORLDSKILLS</h5>
                <p className="experienceText whiteText">Participei da olímpiada do conhecimento na área #17 - Web Design, após treinamentos diários tive a oportunidade de representar o estado DF na seletiva nacional WorldSkills, ficando em 4° lugar em âmbito nacional!</p>
            </aside>
        </div>
    )
}

export default ExperienceTopics