// Array of video URLs and their stats
var videoData = [
  // Array of video URLs and their stats

  {
    url: "https://www.youtube.com/watch?v=cqya9HC8eL0&pp=ygUUa2lkcyB2aWRlb3MgZm9yIGtpZHM%3D",
    stats: {
      context: "GOOD",
      cognitive: "OK",
      musicStimulus: 8,
      visualStimulus: 7,
      objectsUsed: 9,
      habitFormingNature: 8,
      storyMoral: 6,
      ageGroup: "4-6 years"
    }
  },
  {
    url: "https://www.youtube.com/watch?v=vTlx-pmjTkM&pp=ygUUa2lkcyB2aWRlb3MgZm9yIGtpZHM%3D",
    stats: {
      context: "EXCELLENT",
      cognitive: "GOOD",
      musicStimulus: 9,
      visualStimulus: 8,
      objectsUsed: 10,
      habitFormingNature: 9,
      storyMoral: 8,
      ageGroup: "2-4 years"
    }
  },
  {
    url: "https://www.youtube.com/watch?v=itj3E4x2nR0",
    stats: {
      context: "GOOD",
      cognitive: "GOOD",
      musicStimulus: 7,
      visualStimulus: 6,
      objectsUsed: 8,
      habitFormingNature: 7,
      storyMoral: 5,
      ageGroup: "6-8 years"
    }
  },
  {
    url: "https://www.youtube.com/watch?v=Nwva3SQ8UTk",
    stats: {
      context: "OK",
      cognitive: "GOOD",
      musicStimulus: 6,
      visualStimulus: 7,
      objectsUsed: 7,
      habitFormingNature: 6,
      storyMoral: 4,
      ageGroup: "4-6 years"
    }
  },
  {
    url: "https://www.youtube.com/watch?v=t0Q2otsqC4I",
    stats: {
      context: "EXCELLENT",
      cognitive: "EXCELLENT",
      musicStimulus: 9,
      visualStimulus: 9,
      objectsUsed: 10,
      habitFormingNature: 9,
      storyMoral: 8,
      ageGroup: "2-4 years"
    }
  },
  {
    url: "https://www.youtube.com/watch?v=sHrHjZA-bds",
    stats: {
      context: "GOOD",
      cognitive: "OK",
      musicStimulus: 7,
      visualStimulus: 6,
      objectsUsed: 8,
      habitFormingNature: 7,
      storyMoral: 5,
      ageGroup: "4-6 years"
    }
  },
  {
    url: "https://www.youtube.com/watch?v=5oH9Nr3bKfw",
    stats: {
      context: "EXCELLENT",
      cognitive: "GOOD",
      musicStimulus: 8,
      visualStimulus: 9,
      objectsUsed: 9,
      habitFormingNature: 8,
      storyMoral: 7,
      ageGroup: "2-4 years"
    }
  },
  // Add more video data objects here
];

// Function to extract video ID from URL
function getVideoID(videoURL) {
  var videoID = videoURL.split("v=")[1];
  if (videoID) {
    var ampersandPosition = videoID.indexOf('&');
    if (ampersandPosition !== -1) {
      videoID = videoID.substring(0, ampersandPosition);
    }
  }
  return videoID;
}

// Function to generate video cards dynamically
function generateVideoCards() {
  var videoFeed = document.getElementById("videoFeed");
  var html = "";

  videoData.forEach(function(data) {
    var videoURL = data.url;
    var videoStats = data.stats;
    var videoID = getVideoID(videoURL);
    var thumbnailURL = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;

    html += `
      <div class="video-card">
        <a href="${videoURL}" target="_blank">
          <div class="thumbnail">
            <img src="${thumbnailURL}" class="img-fluid" alt="Thumbnail" onerror="this.onerror=null;this.parentNode.classList.add('no-thumbnail');">
            <div class="no-thumbnail"></div>
          </div>
        </a>
        <div class="video-stats">
          <p>Context: ${videoStats.context}</p>
          <p>Cognitive: ${videoStats.cognitive}</p>
          <p>Music Stimulus: ${videoStats.musicStimulus}/10</p>
          <p>Visual Stimulus: ${videoStats.visualStimulus}/10</p>
          <p>Objects Used: ${videoStats.objectsUsed}/10</p>
          <p>Habit Forming Nature: ${videoStats.habitFormingNature}/10</p>
          <p>Story Moral: ${videoStats.storyMoral}/10</p>
          <p>Age Group: ${videoStats.ageGroup}</p>
        </div>
      </div>
    `;
  });

  videoFeed.innerHTML = html;
}

// Call the function to generate video cards
generateVideoCards();