import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux'


class BookDetail extends React.Component {
    render() {
      if (this.props.detail) {
          let author_h3 = <h3 className="author">Unknown Author</h3>
          if (this.props.detail.author) {
              author_h3 = <h3>
                  <Link to={"/author/" + this.props.detail.author.id}>
                    {this.props.detail.author.name}
                  </Link>
                </h3>
          }
            return (
              <div className="content-container">
                <div className="book-detail">
                  <div className="book-info">
                    <img src= {this.props.detail.book_cover} alt="book-cover"/>
                    <h2>{this.props.detail.name}</h2>
                    {author_h3}
                    <h2>XDXDXD {this.props.detail.description}</h2>
                    <h4>${this.props.detail.price}</h4>
                  </div>
                </div>
              </div>
            )
        } else {
            return <div>Error</div>
        }
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        detail : store.book.books.filter(
            (book) => book.id.toString() === ownProps.match.params.id)[0]
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps)
)(BookDetail);
