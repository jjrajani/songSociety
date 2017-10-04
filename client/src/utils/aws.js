let AWS = require('aws-sdk');

let albumBucketName = 'thelabz';
let bucketRegion = 'us-east-2';
let IdentityPoolId = 'us-east-2:f4752c0c-26f7-408f-ac77-997e5d72d645';

function upload(name, file, id_token) {
    return new Promise((res, rej) => {
        AWS.config.update({
            region: bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId,
                Logins: {
                    'bopmob.auth0.com': id_token
                }
            })
        });

        let s3 = new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: albumBucketName }
        });

        s3.upload(
            {
                Key: name,
                Body: file,
                ACL: 'public-read'
            },
            function(err, data) {
                if (err) {
                    console.log(
                        'There was an error uploading your audio: ',
                        err.message
                    );
                    rej(err);
                }
                res(data);
            }
        );
    });
}

module.exports = {
    upload
};

//https://api.soundcloud.com/tracks/57809396/stream?client_id=9590faf7123e87d09a95c043faeec29e
