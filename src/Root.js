import React from 'react';
import Counter from './module/Counter';

//use this component as it was the entry point of your dev server

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counters: [2,1,2]};
  }

  increaseBy1=(index)=>{
    this.setState({
      counters: this.state.counters.map((val,i)=>{
        if(i===index){
          val = val+1;
        }
        return val;
      })
    });
  }

  increaseAll=()=>{
    this.setState({
      counters: this.state.counters.map((val)=>val + 1)
    })
  }

  render(){
    return(
      <div>
        {this.state.counters.map((value, i)=>{
          return <Counter key={i} index={i} onIncrease= {this.increaseBy1} value = {value}/>
        })}
        <button onClick={this.increaseAll}>increase all</button>
      </div>
    )
  }
}
export default Root;
