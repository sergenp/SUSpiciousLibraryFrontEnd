import React from 'react';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux'

class AuthorDetail extends React.Component {
    render() {
        return (
            <div className="author_info">
                <img src= {this.props.detail.author_image} alt="author"/>
                <h2>{this.props.detail.name}</h2>
                <h4>{this.props.detail.about}</h4>
                <h4>Birth Date : {this.props.detail.birth_date ? this.props.detail.birth_date : "Unknown" }</h4>
                <h4>Death Date : {this.props.detail.death_date ? this.props.detail.death_date : "Unknown" }</h4>
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        detail : store.author.authors.filter(
            (author) => author.id.toString() === ownProps.match.params.id)[0]
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps)
)(AuthorDetail);
