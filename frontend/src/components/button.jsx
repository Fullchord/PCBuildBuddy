import "./button.css";

const Button = ({onClick, className, children}) => {


    return (
        <button onClick={onClick} className={`button ${className}`.trim()}>
            {children}
        </button>
    );
}


export default Button;