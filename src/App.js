import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Mark Zuckerberg',
        bio: 'CEO of the largest social networking site in the whole world.',
        imgSrc: 'https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2019/06/Mark-Zuckerberg.jpg?fit=800%2C800&ssl=1',
        profession: 'American computer programmer',
      },
      shows: false,
      mountedAt: null,
      timeSinceMounted: 0,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.setState({ mountedAt: new Date() });
    this.intervalId = setInterval(() => {
      this.setState({ timeSinceMounted: Math.floor((new Date() - this.state.mountedAt) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, timeSinceMounted } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1 style={{backgroundColor: "lightblue"}}>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.profession}</h2>
          </div>
        )}
        <div>
          <h3>Time since last component mount: {timeSinceMounted} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;
