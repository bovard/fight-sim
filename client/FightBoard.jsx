/** @jsx React.DOM */
var React = require('react');

var Well = require('react-bootstrap').Well;


var Figher = React.createClass({
    setInitialState: function() {
        return {
            animated: false,
            health: 50
        }
    },
    render: function() {
        return (<p>X</p>)
    }
});


module.exports = React.createClass({
    render: function() {
        return (
            <table>
                <tr>
                    <td><h1>X</h1></td>
                    <td><h1>O</h1></td>
                </tr>
            </table>
        );
    }
});


