import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bg?: string;
  variant?: "basic" | "cancel" | "confirm";
}

const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props) => props.bg || "gray"};
  border: none;
  color: ${(props) => props.color || "black"};
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;

const CancelButtonStyle = styled(BasicButtonStyle)`
  background-color: hotpink;
  color: white;
`;

const ConcfirmButtonStyle = styled(BasicButtonStyle)`
  background-color: blue;
  color: white;
`;

function Button({ children, variant = "basic", ...rest }: ButtonProps) {
  switch (variant) {
    case "cancel":
      return <CancelButtonStyle {...rest}>{children}</CancelButtonStyle>;
    case "confirm":
      return <ConcfirmButtonStyle {...rest}>{children}</ConcfirmButtonStyle>;
    case "basic":
    default:
      return <BasicButtonStyle {...rest}>{children}</BasicButtonStyle>;
  }
}

export default Button;
