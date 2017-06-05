var React = require("react");


var Item = React.createClass({

  handleClick:function(){
    this.props.onToggle(this.props.id);
  },

  render:function(){
    var {title,author,date} = this.props.data;
    var id = this.props.id;
    return (
      <div onClick={this.handleClick}>
          <p>"id:"{id}"   "  "title:"{title} "author:"{author} "date:"{date}</p>
      </div>
    );
  }

});


module.exports = Item;
