import React from "react"
import PropTypes from "prop-types"
import Timestamp from "react-timestamp"
class Article extends React.Component {

  componentDidMount() {
    var self = this;
    this._timer = setInterval(() => { self.forceUpdate() }, 1000);
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  render () {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small>
              <b>Created by:</b> { this.props.author },
              &nbsp;
              <Timestamp time={ this.props.created_at } precision={4} />,
              last updated: <Timestamp time={ this.props.updated_at } precision={4} />
            </small>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string
};
export default Article