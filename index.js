const AWS = require( 'aws-sdk' );

// Set the region
AWS.config.update({
    region: 'eu-west-2'
});

const lambda = new AWS.Lambda();

const params = {
    FunctionName: 'calculator',
    Payload: '{"firstNumber" : 10, "secondNumber" : 30}'
}

lambda.invoke( params, ( err, data ) => {
    if( err ) {
        console.log( err, err.stack );
    } else {
        console.log( data.Payload );
    }
});
