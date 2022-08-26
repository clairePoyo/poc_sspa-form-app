import { useForm, SubmitHandler } from "react-hook-form";
import Fieldset from "./Fieldset";
import { TStep, IState, IInputs, TFieldsname } from "../types";

import "./step.css";

const Step = ({
  config,
  dispatch,
  state,
}: {
  config: TStep;
  dispatch: React.Dispatch<{
    type: string;
    payload?: unknown;
  }>;
  state: IState;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>({});

  const goBack = () => {
    dispatch({ type: "DECREMENT_PAGE" });
  };

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    dispatch({
      type: "UPDATE_USER_DATA",
      payload: { ...data, currentPage: state.currentPage + 1 },
    });
  };
  return (
    <form className="mfe_form" onSubmit={handleSubmit(onSubmit)}>
      <span className="mfe_brand-label">{state.brand_id}</span>
      {config.map((item) => {
        const { label, name, rules, id } = item;
        return (
          <Fieldset
            key={id}
            register={register}
            name={name as TFieldsname}
            label={label}
            error={errors[name as TFieldsname]}
            rules={rules}
          />
        );
      })}
      <div
        className={`mfe_footer ${
          state.currentPage === 0 ? "mfe_footer--align-right" : ""
        }`}
      >
        {state.currentPage > 0 ? (
          <button onClick={goBack} className="mfe_submit" type="button">
            Retour
          </button>
        ) : null}

        <button className="mfe_submit" type="submit">
          {state.currentPage !== state.maxPage - 1 ? "Suivant" : "Valider"}
        </button>
      </div>
    </form>
  );
};

export default Step;
