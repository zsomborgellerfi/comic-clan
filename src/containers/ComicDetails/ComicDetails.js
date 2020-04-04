import React, { Fragment } from "react";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import ComicsList from "../../components/ComicsList";

import { getComics } from "../../actions";
import { Container } from "react-bootstrap";
import _ from "lodash";
import { Redirect, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import fullStar from "./full_star.svg";
import emptyStar from "./empty_star.png";
import "./ComicDetails.scss";

class ComicDetails extends React.Component {
  componentDidMount() {
    this.fetchComics();
  }

  fetchComics = () => {
    this.props.getComics();
  };

  render() {
    const { loading, comics, comicsFetched } = this.props;

    // it would be more ideal to get one comic by id param
    const comic = comics.find((comic) => {
      return comic.name.includes(this.props.match.params.name);
    });

    const otherComics = _.shuffle(
      comics
        .filter((comic) => !comic.name.includes(this.props.match.params.name))
        .slice(0, 5)
    );

    return (
      <Container fluid className={"ComicDetails"}>
        <div className={"ComicDetails__link"}>
          <Link to={"/comics"}>
            <IoIosArrowBack />
            <span>Back to collection</span>
          </Link>
        </div>
        {comic && (
          <Fragment>
            <div className={"ComicDetails__comicWrapper"}>
              <div className={"ComicDetails__image"}>
                <img src={comic.image} alt={comic.name} />
              </div>
              <div className={"ComicDetails__comic"}>
                <div className={"ComicDetails__name"}>
                  <h1>
                    {" "}
                    {comic.name} ({comic.year}){" "}
                  </h1>
                  <div className={"ComicDetails__ratings"}>
                    {[...Array(comic.rating)].map(() => (
                      <img src={fullStar} alt={`${comic.rating} star`} />
                    ))}
                    {[...Array(5 - comic.rating)].map(() => (
                      <img src={emptyStar} alt={`${comic.rating} star`} />
                    ))}
                  </div>
                </div>
                <div className={"ComicDetails__info"}>
                  <div>
                    Writer: <span>{comic.writer}</span>
                  </div>
                  <div>
                    Artist: <span>{comic.artist}</span>
                  </div>
                  <div>
                    Publication: <span>{comic.publication}</span>
                  </div>
                  <div>
                    Owner: <span>{comic.owner}</span>{" "}
                  </div>
                </div>
                <div className={"ComicDetails__summary"}>{comic.summary}</div>
              </div>
            </div>
            <hr className={"separator"} />
            <h3>Other Random Books</h3>
            <ComicsList comics={otherComics} />
          </Fragment>
        )}
        {loading && <Loading />}
        {comicsFetched && !comics.length && <Redirect to={"/"} />}
      </Container>
    );
  }
}

ComicDetails.defaultProps = {
  comics: [],
};

const mapStateToProps = (state) => {
  return {
    comics: state.comics,
    loading: state.loading,
    comicsFetched: state.comicsFetched,
  };
};
const mapDispatchToProps = {
  getComics: getComics,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetails);
