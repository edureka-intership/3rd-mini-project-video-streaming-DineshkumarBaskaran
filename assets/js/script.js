$("button").click(function() {
  var fired_button = $(this).val();
  VideoStreaming.play(fired_button);
});
document.querySelectorAll('.buttons-container .card').forEach(vid => {
  vid.onclick = () => {
      document.querySelector('.popup-video').style.display = 'block';
  }
});
document.querySelector('.popup-video span').onclick = () => {
  document.querySelector('.popup-video').style.display = 'none';
  document.querySelector('.popup-video iframe').src = "/video";
};

// calling an api

let VideoStreaming = {

  fetchVideo: function (value) {
    fetch(
      "http://localhost:8900/video/all/"
      + value
    ).then(response => response.json()
    ).then(data => this.givePath(data));
  },

  givePath: function (data) {
    const { path } = data.data[0];
    console.log(path);
    document.querySelector(".source").src=path;

  },
  play: function(valueCode) {
    this.fetchVideo(valueCode);
  }

}


