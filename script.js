    var video = document.getElementById('video');
    var source = document.getElementById('source');
    if (Math.random() * 2 > 1) {
        source.setAttribute('src', "a.mp4");
        console.log("a.mp4");
    } else {
        source.setAttribute('src', "b.mp4");
        console.log("b.mp4");
    }

    video.load();
    video.play();