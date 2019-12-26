/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import Loading from '../loading/loading.component'
import axios from 'axios'
import './joke-directory.styles.scss'

class JokeDirectory extends Component {
  constructor() {
    super()

    this.state = {
      category: 'animal',
      joke: [],
      isLoading: false
    }

    this.getJokeByCategory = this.getJokeByCategory.bind(this)
  }

  getJokeByCategory() {
    this.setState({ isLoading: false })
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${this.props.match.params[0]}`)
      .then(response => {
        this.setState({ isLoading: true, joke: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${this.props.match.params[0]}`)
      .then(response => {
        console.log(response.data)
        this.setState({ isLoading: true, joke: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if (!this.state.isLoading) {
      return <Loading />
    }
    console.log(this.props.match.params[0])
    const { value } = this.state.joke
    return (
      <div className="joke-directory">
        <p>{`"${value}"`}</p>
        <div>
          <CustomButton isMoreJokes onClick={this.getJokeByCategory}>
            One more Fact...
          </CustomButton>
        </div>
      </div>
    )
  }
}

export default withRouter(JokeDirectory)
