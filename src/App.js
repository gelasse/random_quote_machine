import logo from './logo.svg';
import './App.css';
import React from 'react';

class QuoteMachine extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      compteur: 0
    }  
  }
random_quote = this.random_quote.bind(this);
random_quote() {
  this.setState({
    compteur: Math.floor(Math.random() * 11)
  })
}
  
  render() { 
    const style = {
      //display: 'flex',
      //justifyContent: 'center',
      //alignItems: 'center',
      //height: 'auto',
      display: 'inline-block',
      margin: '0 auto',
      marginTop: '300px',
      padding: '30px',
      width: '500px',
      color: this.props.random_elt.random_color[this.state.compteur],
      backgroundColor: 'white',
      fontFamily: 'Raleway, sans-serif'
    }
    return(<div style={{backgroundColor: this.props.random_elt.random_color[this.state.compteur],
    textAlign: 'center', width: '100%', height: '900px'}}>
      
      <div id='quote-box' style ={style}>
        <div>
      <p id='text' style={{fontSize: '20px', textAlign: 'center', margin:'0px'}}><i class="fa fa-quote-left" aria-hidden="true"></i>  {this.props.random_elt.random_phrase[this.state.compteur]}</p>
      <h5 id='author' style={{fontStyle: '12px', textAlign: 'right', fontWeight: 'normal'}}>{this.props.random_elt.random_author[this.state.compteur]}</h5>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px', fontSize: '40px',
      margin:'0px'}}>
         <div style={{width: '120px', height: '60px'}}> <a href='https://twitter.com/intent/tweet' 
         id='tweet-quote' target='_blank' style={{color: 'inherit', marginRight: '3px'}}>
          <i class='fa fa-twitter-square' title='Tweet this code!'></i></a><a href='https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DConfucius%26content%3DIt%2Bdoes%2Bnot%2Bmatter%2Bhow%2Bslowly%2Byou%2Bgo%2Bas%2Blong%2Bas%2Byou%2Bdo%2Bnot%2Bstop.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button' 
          target='_blank' style={{color: 'inherit'}}><i class="fa fa-tumblr-square" title='Post this quote on tumblr!'></i></a></div>
         <div id='new-quote' style={{width: '120px', height: '60px'}}>
      <button style={{backgroundColor: this.props.random_elt.random_color[this.state.compteur], color: 'white', 
      fontSize: '20px', border: 'none', borderRadius: '3px'}} 
      onClick={this.random_quote}>New Quote</button>
      </div>
        </div>
      </div>
    </div>)
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    
}
  render() {
    const random_elt = {random_phrase: ['You miss 100% of the shots you don’t take.', 'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.', 
    'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.', 
  'Fall seven times and stand up eight.', 'We must balance conspicuous consumption with conscious capitalism.', 
  'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.', 
'You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.', 
'Either you run the day, or the day runs you.', 'The best time to plant a tree was 20 years ago. The second best time is now.', 
'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.', 
'Certain things catch your eye, but pursue only those that capture the heart.'], 
 random_color: ['rgb(155, 89, 182)', 'rgb(22, 160, 133)', 'rgb(155, 89, 182)', 
    'rgb(231, 76, 60)', 'rgb(71, 46, 50)', 'rgb(44, 62, 80)', 'rgb(71, 46, 50)', 
  'rgb(243, 156, 18)', 'rgb(44, 62, 80)', 'rgb(231, 76, 60)', 'rgb(155, 89, 182)'],
    random_author: ['- Wayne Gretzky', '- Mae Jemison', '- Michael Jordan', 
    '- Japanese Proverb', '- Kevin Kruse', '- Vincent Van Gogh', '- Unknown', 
  '- Jim Rohn', '- Chinese Proverb', '- Aristotle', '- Ancient Indian Proverb']};
    return(<div style={{backgroundColor: 'yellow'}}>
    
    <QuoteMachine random_elt = {random_elt}/>
    </div>)
  }
}

export default App;
