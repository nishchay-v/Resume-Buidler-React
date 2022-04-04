import "./InfoCard.css";
import { connect } from "react-redux";

function InfoCard({ info }) {
    return (
        <div className="info-card">
            <h4>{info.name}</h4>
            <div>Ph: {info.phone} </div>
            <div>Email: {info.email}</div>
            <div>{info.address}</div>
        </div>
    );
}
const getInfo = (state) => state.fields.info[0].data;

const mapStateToProps = (state) => ({
    info: getInfo(state),
});

export default connect(mapStateToProps)(InfoCard);
