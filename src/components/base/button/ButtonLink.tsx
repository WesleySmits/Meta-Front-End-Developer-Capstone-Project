import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import { ButtonVariant } from './Button.types';
import { getClassNameFromArray } from '../../../utils/component';

type ButtonLinkProps = {
    label: string;
    href: string;
    target?: React.HTMLAttributeAnchorTarget;
    variant?: ButtonVariant;
};

const ButtonLink = ({ label, href, target, variant = ButtonVariant.Primary }: ButtonLinkProps) => {
    const classes = [styles.button, variant === ButtonVariant.Primary ? '' : styles.buttonSecondary];
    const className = getClassNameFromArray(classes);

    return (
        <Link
            to={href}
            target={target}
            className={className}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
            {label}
        </Link>
    );
};

export default ButtonLink;
