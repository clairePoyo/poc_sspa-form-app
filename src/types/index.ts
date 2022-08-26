import { UseFormRegister, RegisterOptions, FieldError } from "react-hook-form";

export interface IApp {
  brand_id: string;
}

export type IInputs = {
  firstname: string;
  lastname: string;
  birthday_date: string;
  favoriteAnimal: string;
};

export type TFieldsname = keyof IInputs;

export interface IFieldset {
  key: number;
  register: UseFormRegister<IInputs>;
  label: string;
  name: TFieldsname;
  error?: FieldError;
  rules: Record<string, any>;
}

export interface IStepItem {
  id: number;
  label: string;
  name: string;
  rules: RegisterOptions;
}

export type TStep = Array<IStepItem>;

export interface IState extends IInputs {
  currentPage: number;
  maxPage: number;
  brand_id?: string;
}
