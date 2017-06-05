var React = require("react");

var Item = require("Item");


var List = React.createClass({
  render:function (){

    var {requests} = this.props;

    // //{
    //   title: “Give me money”,
    //   author: “Scrooge McDuck”,
    //   date: “01/25/2015”
    // }

    var renderListTrue = ()=>{
      return requests.map((request)=>{
        if(request.start===true){
          return (
            <Item onToggle={this.props.onToggle} id={request.id} data={request}/>
          );
        }
      });
    };

    var renderListFalse = ()=>{
      return requests.map((request)=>{
        if(request.start===false){
          return (
            <Item onToggle={this.props.onToggle} id={request.id} data={request}/>
          );
        }
      });
    };

    return (
      <div>
        <h1>Here are START requests</h1>
        {renderListTrue()}
        <h1>Here are END requests</h1>
        {renderListFalse()}
      </div>

    );


  }
});


module.exports = List;
