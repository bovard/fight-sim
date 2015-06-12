/** @jsx React.DOM */
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Well = require('react-bootstrap').Well;

var FightBoard = require('./FightBoard');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Well>
                    <h1>The Fight Goes Here!</h1>
                </Well>
                <Well>
                    <FightBoard />
                </Well>
            </div>
        );
    }
});

React.renderComponent(
    <Main />,
    document.body
);

