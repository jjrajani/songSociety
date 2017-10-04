let AWS = require('aws-sdk');

let albumBucketName = 'thelabz';
let bucketRegion = 'us-east-2';
let IdentityPoolId = 'us-east-2:f4752c0c-26f7-408f-ac77-997e5d72d645';

function upload(name, file, id_token) {
    AWS.config.update({
        region: bucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId,
            Logins: {
                'bopmob.auth0.com': id_token
            }
        })
    });

    //let s3 = new AWS.S3();

    // var params = {
    //   Body: file,
    //   Bucket: albumBucketName,
    //   Key: "test2",
    //   ServerSideEncryption: "AES256"
    // };
    // s3.putObject(params, (err, data) => {
    //   if (err) console.log(err, err.stack); // an error occurred
    //   else console.log(data);           // successful response
    // });

    let s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: { Bucket: albumBucketName }
    });

    // let managedUploader =
    s3
        .upload(
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
                }
                console.log(data);
            }
        )
        .on('httpUploadProgress', function(evt) {
            let loadingWrapper = document.getElementById('loading_wrapper');
            let statusBar = document.getElementById('status_bar');
            let percentComplete = 100 * evt.loaded / evt.total;
            let progressCount = document.getElementById('progress_count');
            let playButton = document.getElementById('play_button');
            let previewAudioPlayer = document.getElementById('preview_audio');
            loadingWrapper.style.display = 'inline';
            loadingWrapper.style.visibility = 'visible';
            statusBar.style.width = `${Math.ceil(percentComplete)}%`;
            progressCount.innerHTML = `${Math.ceil(percentComplete)}%`;
            if (evt.loaded === evt.total) {
                playButton.style.display = 'inline';
                playButton.style.visibility = 'visible';
                console.log(evt);
                previewAudioPlayer.src = `${evt.Location}`;
            }
        });
}

module.exports = {
    upload
};

//https://api.soundcloud.com/tracks/57809396/stream?client_id=9590faf7123e87d09a95c043faeec29e
