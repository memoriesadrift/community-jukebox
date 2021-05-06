let videos = new Map();

export function voteOnVideo(videoId) {
    if (videos.has(videoId)) {
        let value = videos.get(videoId);
        videos.set(videoId, value + 1);
        return;
    }
    videos.set(videoId, 1);
}

export function determineWinner() {
    let highestValue = 0;
    let winningVideo = ''; 

    videos.forEach(video => {
        let value = videos.get(video);
        if (value > highestValue) {
            highestValue = value;
            winningVideo = video;
        }
    });
    if (winningVideo){
        return winningVideo
    }
    return 'L_jWHffIx5E';
}
