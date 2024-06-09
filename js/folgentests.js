document.getElementById('nextButtonVier').addEventListener('click', function() {
    var frame1 = document.getElementById('spotifyVier1');
    var frame2 = document.getElementById('spotifyVier2');

    if (frame1.style.display === "none") {
        frame1.style.display = "block";
        frame2.style.display = "none";
    } else {
        frame1.style.display = "none";
        frame2.style.display = "block";
    }
});

document.getElementById('nextButtonDrei').addEventListener('click', function() {
    var frame1 = document.getElementById('spotifyDrei1');
    var frame2 = document.getElementById('spotifyDrei2');

    if (frame1.style.display === "none") {
        frame1.style.display = "block";
        frame2.style.display = "none";
    } else {
        frame1.style.display = "none";
        frame2.style.display = "block";
    }
});

document.getElementById('nextButtonZwei').addEventListener('click', function() {
    var frame1 = document.getElementById('spotifyZwei1');
    var frame2 = document.getElementById('spotifyZwei2');

    if (frame1.style.display === "none") {
        frame1.style.display = "block";
        frame2.style.display = "none";
    } else {
        frame1.style.display = "none";
        frame2.style.display = "block";
    }
});



document.addEventListener('DOMContentLoaded', function () {
    let episodeIndex = 4;

    document.getElementById('loadMoreButton').addEventListener('click', function () {
        const episodes = document.querySelectorAll('.episode');
        for (let i = episodeIndex; i < episodeIndex + 4 && i < episodes.length; i++) {
            episodes[i].style.display = 'block';
        }
        episodeIndex += 4;

        // Hide the button if there are no more episodes to show
        if (episodeIndex >= episodes.length) {
            document.getElementById('loadMoreButton').style.display = 'none';
        }
    });
});