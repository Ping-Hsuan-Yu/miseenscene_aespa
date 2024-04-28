import styled from "styled-components";

export const InputCheckBox = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1em;
  height: 1em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  margin-top: 4px;
  &::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em currentColor;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

export default function CheckBox(props: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: string[];
}) {
  const { value, onChange, state } = props;
  return (
    <div className="flex items-center gap-2">
      <InputCheckBox
        type="checkbox"
        id={value}
        value={value}
        onChange={onChange}
        checked={state.includes(value)}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}
