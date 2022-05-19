const AWS = require( 'aws-sdk' );

// Set the region
AWS.config.update({
    region: 'eu-west-2'
});

const lambda = new AWS.Lambda();

const params = {
    FunctionName: 'hello-world-python'
}

lambda.invoke( params, ( err, data ) => {
    if( err ) {
        console.log( err, err.stack );
    } else {
        console.log( data );
    }
});
