var React = require("react");

var AddList = React.createClass({

  handleSubmit:function(e){
    e.preventDefault();

    var title = this.refs.title.value;
    var author = this.refs.author.value;
    var date = this.refs.date.value;
    this.props.onAdd(title,author,date);
  },

  render:function(){

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="title"/>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="date" placeholder="date"/>
          <button type="submit">Submit</button>

        </form>
      </div>
    );

  }


});



module.exports = AddList;
