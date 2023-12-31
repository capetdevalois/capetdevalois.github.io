const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    theme: "#000",
    mutex: true,
    lrcType: 0,
    audio: [
        {
            name: "騎士王の誇り",
            artist: "川井憲次",
            url: "http://music.163.com/song/media/outer/url?id=448119.mp3",
            cover:
                "http://p1.music.126.net/U0Tf2ESHBauv2F9t1PgEZA==/109951163339713541.jpg",
        }
    ]
})