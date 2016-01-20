var React = require('react');
var ListItem = require('./ListItem.jsx');
var ingredients = [{"id":1, "text":"lemon"}, {"id":2, "text":"lime"}, {"id":3, "text":"grapefruit"}];

var List = React.createClass({
  render: function() {
    var items = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text}/>;
    });
    return (
      <ul>
        {items}
      </ul>
      );
  }
});

module.exports = List;
