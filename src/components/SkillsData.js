import "./SkillsStyles.css"

function SkillsData(props){
    return(
     <div className="s-card">
        <div className="s-image">
            <img src={props.image} alt="image"/>
        </div>   
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
     </div>       

    )
}
export default SkillsData;