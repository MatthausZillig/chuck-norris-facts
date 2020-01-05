/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import Loading from '../loading/loading.component'
import axios from 'axios'
import './joke-directory.styles.scss'

class JokeDirectory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      joke: [],
      isLoading: false
    }

    this.getJokeByCategory = this.getJokeByCategory.bind(this)
  }

  getJokeByCategory() {
    this.setState({ isLoading: false })
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${this.props.jokes}`)
      .then(response => {
        this.setState({ isLoading: true, joke: response.data }, () => console.log(this.state))
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${this.props.jokes}`)
      .then(response => {
        this.setState({ isLoading: true, joke: response.data }, () => console.log(this.state))
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if (!this.state.isLoading) {
      return <Loading />
    }

    console.log('props', this.props)

    const { value } = this.state.joke
    return (
      <div className="joke-directory">
        <p className="joke-directory__text">{`"${value}"`}</p>
        <div>
          <CustomButton isMoreJokes onClick={this.getJokeByCategory}>
            One more Fact...
          </CustomButton>
        </div>
      </div>
    )
  }
}

const withRouterJokeDirectory = withRouter(JokeDirectory)

const mapStateToProps = state => ({
  jokes: state.jokesReducer.jokes
})
export default connect(mapStateToProps)(withRouterJokeDirectory)
