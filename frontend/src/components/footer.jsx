import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <table className="table">
                <tr className="tr">
                    <th>ABOUT</th>
                    <th className="td">CONTACT US</th>
                </tr>
                <tr>
                    <td>link here</td>
                    <td className="td">link here</td>
                </tr>
            </table>
            <p className="p">@2023 PCBuildBuddy</p>
        </footer>
    );
}

export default Footer;