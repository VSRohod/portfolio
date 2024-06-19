function Tools(props){
    return (
        <div className="toolItem middleCenter colummAlign">
            <p className={props.cor}>{props.nome}</p>
        </div>
    )
}

export default Tools