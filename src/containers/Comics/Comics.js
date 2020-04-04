import React from "react";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import ComicsList from "../../components/ComicsList";
import { LinkContainer } from "react-router-bootstrap";

import { getComics } from "../../actions";
import "./Comics.scss";
import { comicFilterKeys } from "../../utils/comicFilterKeys";
import { Form, InputGroup, Button, Container } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import _ from "lodash";

class Comics extends React.Component {
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

  componentDidMount() {
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

    //group comics by selected filter key
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
      comicsGroupedByKey = { [key]: _.shuffle(comics).slice(0, 5) };
    } else {
      comicsGroupedByKey = groupBy(key)(comics);
    }

    this.setState({ activeFilterKey: key, comicsGroupedByKey });
  };

  onSearchInputChange = (event) => {
    /* signal to React not to nullify the event object */
    event.persist();

    if (!this.debouncedFn) {
      // debounce fetch requests while typing
      this.debouncedFn = _.debounce(() => {
        let searchText = event.target.value;
        this.setState({ searchText });
      }, 300);
    }

    this.debouncedFn();
  };

  render() {
    const { loading } = this.props;
    const { comicsGroupedByKey, activeFilterKey } = this.state;

    return (
      <Container fluid className={"Comics"}>
        <div>
          <Form onSubmit={(e) => e.preventDefault()}>
            <InputGroup className="Comics__searchInputWrapper">
              <InputGroup.Prepend>
                <InputGroup.Text className={"Comics__searchIcon"}>
                  <IoIosSearch size={24} color={"#cccccc"} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeholder="Search by book name"
                onChange={this.onSearchInputChange}
                className={"Comics__searchInput"}
              />
            </InputGroup>
          </Form>
          {comicFilterKeys.map((key) => {
            return (
              <LinkContainer
                key={key}
                to={`/comics/${key}`}
                className={`Comics__filterSwitch ${
                  activeFilterKey === key ? "Comics__filterSwitchActive" : ""
                }`}
              >
                <Button>{key}</Button>
              </LinkContainer>
            );
          })}
          {!loading ? (
            Object.keys(comicsGroupedByKey).map((key, idx) => {
              return (
                <div key={key}>
                  {idx > 0 && <hr className={"separator"} />}
                  <h3 className={"Comics__rowTitle"}>{key}</h3>
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

Comics.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Comics);
