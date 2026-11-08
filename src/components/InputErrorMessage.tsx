interface IProps {
  msg?: string;
}

const InputErrorMessage = ({ msg }: IProps) => {
  return msg ? (
    <span className="text-red-700 font-semibold text-sm block">{msg}</span>
  ) : null;
};

export default InputErrorMessage;
