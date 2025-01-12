import { getClassNameFromArray } from '../../../utils/component';
import styles from './Button.module.css';
import { ButtonVariant } from './Button.types';

type ButtonProps = Partial<HTMLButtonElement> & {
    label: string;
    onClick: () => void;
    variant?: ButtonVariant;
    disabled?: boolean;
};

const Button = ({ label, onClick, variant = ButtonVariant.Primary, disabled = false }: ButtonProps) => {
    const classes = [styles.button, variant === ButtonVariant.Primary ? '' : styles.buttonSecondary];
    const className = getClassNameFromArray(classes);

    return (
        <button onClick={onClick} className={className} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
