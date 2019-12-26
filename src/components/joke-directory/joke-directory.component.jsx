/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import axios from 'axios'
import './joke-directory.styles.scss'

class JokeDirectory extends Component {
  constructor() {
    super()

    this.state = {
      category: 'animal',
      joke: []
    }

    this.getJokeByCategory = this.getJokeByCategory.bind(this)
  }

  getJokeByCategory() {
    console.log('entrou')
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${this.props.match.params[0]}`)
      .then(response => {
        this.setState({ joke: response.data })
        console.log('novo: ', this.state.joke)
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
        this.setState({ joke: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if (!this.state.joke.value) {
      return null
    }
    console.log(this.props.match.params[0])
    return (
      <div className="joke-directory">
        <p>{`"${this.state.joke.value}"`}</p>
        <div>
          <CustomButton onClick={this.getJokeByCategory} isMoreJokes>
            One more Fact
          </CustomButton>
        </div>
      </div>
    )
  }
}

export default withRouter(JokeDirectory)
