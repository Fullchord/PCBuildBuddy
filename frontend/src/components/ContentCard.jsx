import "./ContentCard.css";

const ContentCard = (props) => {

    return (
        <div className="content-card">
            {props.children}
        </div>
    );
}

export default ContentCard;