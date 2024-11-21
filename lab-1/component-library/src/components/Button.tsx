interface ButtonProps<T> {
    value: T;
    onClick?: () => void;
    disabled?: boolean;
}

// define value como requerido y onClick/disabled como opcionales
type ButtonWithRequiredProps<T> = Required<Pick<ButtonProps<T>, 'value'>> & Partial<Pick<ButtonProps<T>, 'onClick' | 'disabled'>>;

// para evitar problemas con disabled, se define default false
export default function Button<T>({ value, onClick, disabled = false }: ButtonWithRequiredProps<T> ): JSX.Element {

  const handleOnClickButton = () => {
    // captura el evento previo a llamar al prop onClick
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      onClick={ handleOnClickButton }
      disabled={ disabled }
      >
      { String(value) }
    </button>
  );
}
