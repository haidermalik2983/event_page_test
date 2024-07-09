import { ChangeEvent, FC,  } from "react";

interface Props {
  value?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeHolder?: string
}

const Input: FC<Props> = ({ onChange, className, type, placeHolder }) => {
  return (
    <input className={className} onChange={onChange} type={type} placeholder={placeHolder}/>
  );
};

export default Input;
