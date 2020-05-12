import React from 'react';
import ImageContainer from './containers/ImageContainer';
import './App.css';


//Redux 
import { connect } from 'react-redux';
import {
  changeSubreddit,
  updateArray
} from './redux/actions/action';

const mapStateToProps = (state) => {
  return({
      subreddit: state.firstReducer.subreddit,
      images: state.firstReducer.images,
  })
}
const mapDispatchToProps = {
  changeSubreddit,
  updateArray
};



class App extends React.Component {
  
  //local state used for creating default fetch query based on subreddit name
  state = {
    fetchUrl: `https://www.reddit.com/r/${this.props.subreddit}/hot.json?limit=100`
  }

  //Upon load of page, fetch all images from top 100 'hot' posts and creates array from them.  
  componentDidMount = () => {
    fetch(this.state.fetchUrl)
      .then(res=>res.json())
      .then(json => {
        let arr = json.data.children.filter(child => {
          return child.data['post_hint']==='image'||child.data['post_hint']==='rich:video';
        });
        console.log(arr);
        this.props.updateArray(arr);
      })
  }

  render = ()=>{
    return(
      <div className="App">
        <ImageContainer images={this.props.images}/>
      </div>
    )
  }    
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App); 
