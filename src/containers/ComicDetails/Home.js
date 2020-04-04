import React from "react";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import ComicsList from "../../components/ComicsList";
import { LinkContainer } from "react-router-bootstrap";

import { getComics } from "../../actions";
import "./Home.scss";
import { comicFilterKeys } from "../../utils/comicFilterKeys";
import { Form, InputGroup, Button, Container } from "react-bootstrap";
import _ from "lodash";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const urlCategory = props.match.params.category;
    this.state = {
      activeFilterKey:
        urlCategory && comicFilterKeys.includes(urlCategory)
          ? urlCategory
          : comicFilterKeys[0],
      comicsGroupedByKey: {},
      searchText: "",
    };
  }

  componentWillMount() {
    this.fetchComics();
  }

  componentDidUpdate(prevProps, prevState) {
    const { comics, location, match } = this.props;
    if (prevState.searchText !== this.state.searchText) {
      this.fetchComics();
    }
    if (
      comics.length !== prevProps.comics.length ||
      location.pathname !== prevProps.location.pathname
    ) {
      this.filterComics(match.params.category || this.state.activeFilterKey);
    }
  }

  fetchComics = () => {
    this.props.getComics(this.state.searchText);
  };

  filterComics = (key) => {
    const { comics } = this.props;

    const groupBy = (key) => (array) =>
      array.reduce(
        (objectsByKeyValue, obj) => ({
          ...objectsByKeyValue,
          [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj),
        }),
        {}
      );

    let comicsGroupedByKey = {};
    if (key === "random") {
      comicsGroupedByKey = { [key]: _.shuffle(comics) };
    } else {
      comicsGroupedByKey = groupBy(key)(comics);
    }

    this.setState({ activeFilterKey: key, comicsGroupedByKey });
  };

  onSearchInputChange = (event) => {
    /* signal to React not to nullify the event object */
    event.persist();

    if (!this.debouncedFn) {
      this.debouncedFn = _.debounce(() => {
        let searchText = event.target.value;
        this.setState({ searchText });
      }, 300);
    }

    this.debouncedFn();
  };

  render() {
    const { loading } = this.props;
    const { comicsGroupedByKey } = this.state;

    return (
      <Container fluid className={"Home__container"}>
        <div>
          <Form onSubmit={(e) => e.preventDefault()}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeholder="Search by book name"
                aria-label="search"
                aria-describedby="search-book"
                onChange={this.onSearchInputChange}
              />
            </InputGroup>
          </Form>
          {comicFilterKeys.map((key) => {
            return (
              <LinkContainer to={`/comics/${key}`}>
                <Button>{key}</Button>
              </LinkContainer>
            );
          })}
          {!loading ? (
            Object.keys(comicsGroupedByKey).map((key) => {
              return (
                <div key={key}>
                  <h3>{key}</h3>
                  <ComicsList comics={comicsGroupedByKey[key]} />
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </Container>
    );
  }
}

Home.defaultProps = {
  comics: [],
};
const mapStateToProps = (state) => {
  return {
    comics: state.comics,
    loading: state.loading,
  };
};
const mapDispatchToProps = {
  getComics: getComics,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
