/** @jsx React.DOM */
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Well = require('react-bootstrap').Well;


var InterfaceComponent = React.createClass({
    getInitialState: function() {
    },
    componentWillMount : function() {
    },
    render: function() {
        var nav = 0;
        var content;
        if (this.props.router.current[0] == 'fight') {
            nav = 1;
            content = (
                <Well>
                </Well>
            );
        }
        if (this.props.router.current[0] == 'about') {
            nav = 2;
            content = (
                <Well>
                </Well>
            );
        }
        return (
            <div className="content">
                <MainNav current={nav} />
                <Well>
                    {content}
                </Well>
            </div>
        );
    }
});

var Router = Backbone.Router.extend({
    current: ['home'],
    routes: {
        '*actions': function(actions) {
            if (actions) {
                this.current = actions.split('/');
            } else {
                this.current = ["fight"];
            }
        }
    },
});

var router = new Router();

React.renderComponent(
    <InterfaceComponent router={router} />,
    document.body
);

Backbone.history.start();