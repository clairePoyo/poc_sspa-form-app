import "./finalstep.css";

const FinalStep = ({ state, goBack }) => (
  <div className="mfe_final-step">
    <p>AWESOME!!!</p>
    <ul className="mfe_final-step__result">
      {Object.keys(state).map((key) => {
        if (
          ![
            "firstname",
            "lastname",
            "birthday_date",
            "favoriteAnimal",
          ].includes(key)
        )
          return null;
        return (
          <li>
            <span>{key}:</span> {state[key]}
          </li>
        );
      })}
    </ul>
    <button onClick={goBack}>Start over</button>
  </div>
);

export default FinalStep;
