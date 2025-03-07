import Score from "./Score"


function Learner ({name, bio, scores}) {
    
    return(
        <div>
            <h1>{name}</h1>
            <p>{bio}</p>
            <h3>Scores:</h3>
            <ol>
                {scores.map((score, index) => (
                    <Score key={index} date={score.date} score={score.score}/>
                ))}
            </ol>
        </div>
    )


}

export default Learner