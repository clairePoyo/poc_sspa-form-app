import { IFieldset } from "../types";
import "./fieldset.css";

const Fieldset = ({ register, label, name, error, rules }: IFieldset) => {
  return (
    <div className="mfe_fieldset">
      <label className="mfe_label">{label}</label>
      <input className="mfe_input" {...register(name, rules)} />
      {error && <span className="mfe_error-text">This field is required</span>}
    </div>
  );
};

export default Fieldset;
