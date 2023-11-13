import { Component } from 'react';
import { Wrapper } from './App.style';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImg } from './api';
import { LoadMoreButton } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const newQuery = query.split('/')[1];
    if (prevState.query !== query || prevState.page !== page) {
      try {
        const addImages = await fetchImg(newQuery, page);
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...addImages.hits],
          }
        })
      } catch (error) {

      }
    }
  }

  handelSubmit = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery.text}`,
      page: 1,
      images: [],
    });
  };

  handelLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      }
    })
  }

  render() {
    const {images} = this.state
    return (
      <Wrapper>
        <Searchbar onSearch={this.handelSubmit} />
        <ImageGallery images={images} />
        <LoadMoreButton onClick={this.handelLoadMore} />
        <GlobalStyle />
      </Wrapper>
    );
  }
}
