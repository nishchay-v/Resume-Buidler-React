import React from "react";
import { connect } from "react-redux";

import "./CodeForcesCard.css";

function CodeForcesCard({ dispatch, loading, data, hasErrors, handle }) {
    const renderData = () => {
        if (loading) return <p>Loading user...</p>;
        if (hasErrors) return <p>Unable to load user data.</p>;
        if (data)
            return (
                <div>
                    <div className="codeforces-card">
                        <h4>{data.handle}</h4>
                        <div>
                            Rank: {data.rank} (max: {data.maxRank})
                        </div>
                        <span>
                            Rating: {data.rating} (max: {data.maxRating})
                        </span>
                        <div>{data.address}</div>
                    </div>
                </div>
            );
    };
    return (
        <div>
            <div className="section-heading">CodeForces</div>;{renderData()}
        </div>
    );
}

const getHandle = (state) => state.fields.codeforces[0].data.handle;
const getLoading = (state) => state.codeforces.loading;
const getUserData = (state) => state.codeforces.data;
const getHasErrors = (state) => state.codeforces.hasErrors;

const mapStateToProps = (state, ownProps) => ({
    handle: getHandle(state),
    loading: getLoading(state),
    data: getUserData(state),
    hasErrors: getHasErrors(state),
});

export default connect(mapStateToProps)(CodeForcesCard);
