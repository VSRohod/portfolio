function Tools(props){
    let css = "color : "+props.cor+";"
    return (
        <div className="toolItem middleCenter colummAlign">
            <p style={css}>{props.nome}</p>
        </div>
    )
}

export default Tools