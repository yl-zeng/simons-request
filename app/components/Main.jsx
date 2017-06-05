var React = require("react");

var uuid = require("node-uuid");
var List = require("List");
var AddList = require("AddList");

var Main = React.createClass({

  handleToggle:function(id){

    var newRequest = this.state.requests.map((request)=>{
      if(request.id === id){
        request.start = !request.start;
      }

      return request;
    });

    this.setState({
      requests:newRequest
    });

  },


  handleAdd:function(title,author,date){
    var newRequest = {
      id:this.state.curr,
      title,
      author,
      date,
      start:true
    };

    var requests = this.state.requests;
    var nextId = this.state.curr+1;
    this.setState({
      requests:[
        ...requests,
        newRequest
      ],
      curr:nextId
    });
    console.log("Current State",this.state.requests);
  },

  getInitialState: function(){
    return {
      requests: [{
        id:1,
        title: "Give me money",
        author: "Scrooge McDuck",
        date: "01/25/2015",
        start: true
      },{
        id:2,
        title: "Give me health",
        author: "Doctor Octopus",
        date: "11/13/1999",
        start:true
      }],
      curr:3
    };
  },

  render:function (){
    return (
      <div>
        <List onToggle={this.handleToggle} requests={this.state.requests}/>
        <AddList onAdd={this.handleAdd}/>
      </div>

    );
  }


});


module.exports = Main;
