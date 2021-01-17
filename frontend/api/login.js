'use strict';

var aws = require('aws-sdk');
var db = new aws.DynamoDB();

exports.handler = (event, context, callback) => {
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('temp'),
    };
    
    var params = {
        TableName: 'users',
        Key: {
            'username': event.body.username, 
            'password': event.body.password
        }, 
    }
    
    db.getItem(params, function(err, data) {
        if (err) {
            response.statusCode = 400;
            response.body = JSON.stringify('invalid username/password')
        } else {
            response.body = JSON.stringify('logging in')
        }
    });
    
    return response;
};