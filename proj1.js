var button = document.getElementById("but");
var inputFields = [
  document.getElementById("txtGirl"),
  document.getElementById("txtBoy"),
  document.getElementById("txtPlace"),
  document.getElementById("txtWeather"),
  document.getElementById("txtVerb"),
  document.getElementById("txtPart"),
  document.getElementById("txtPerson"),
  document.getElementById("txtObject"),
  document.getElementById("txtEmotion"),
  document.getElementById("txtEmotionGirl"),
  document.getElementById("txtPastVerb"),
];
var output = document.getElementById("output");

function tellStory() {
  var allFieldsFilled = inputFields.every(function (input) {
    return input.value.trim() !== "";
  });

  // Check if any of the fields are empty
  if (allFieldsFilled) {
    inputFields.forEach(function (input) {
      input.classList.remove("error-input");
    });
    // Construct the story using input values
    var girl = inputFields[0].value.trim();
    var boy = inputFields[1].value.trim();
    var place = inputFields[2].value.trim();
    var weather = inputFields[3].value.trim();
    var verb = inputFields[4].value.trim();
    var part = inputFields[5].value.trim();
    var person = inputFields[6].value.trim();
    var object = inputFields[7].value.trim();
    var emotion = inputFields[8].value.trim();
    var emotionG = inputFields[9].value.trim();
    var pastVerb = inputFields[10].value.trim();

    var story =
      "Once upon a time, there was a girl named <span class='underline'>" +
      girl +
      "</span>. ";
    story +=
      "She was in love with a boy named <span class='underline'>" +
      boy +
      "</span>. ";
    story +=
      "They found themselves in <span class='underline'>" + place + "</span>. ";
    story +=
      "Unfortunately, the weather was <span class='underline'>" +
      weather +
      "</span> and they had to hide! ";
    story +=
      "Next, they <span class='underline'>" +
      verb +
      "</span> which didn't go well because " +
      boy;
    story += "</span> broke his <span class='underline'> " + part;
    story +=
      "</span> They had to quickly call<span class='underline'> " + person;
    story +=
      boy +
      "</span> had to use a <span class='underline'>" +
      object +
      "</span> because he wasn't able to walk! <span class='underline'>";
    story += "</span> This made him very <span class='underline'>" + emotion;
    story +=
      "</span> Which made " +
      girl +
      "</span> feel <span class='underline'>" +
      emotionG;
    story += "</span> and then they almost <span class='underline'>" + pastVerb;

    // Copy the story to the output
    output.innerHTML = story;
  } else {
    inputFields.forEach(function (input) {
      if (input.value.trim() === "") {
        input.classList.add("error-input");
      } else {
        input.classList.remove("error-input");
      }
    });
    // Display an error message if any field is empty
    alert("Error: Please fill out all fields.");
  }
}

// Event listener for button click
button.addEventListener("click", tellStory);

inputFields[inputFields.length - 1].addEventListener(
  "keydown",
  function (event) {
    if (event.key === "Enter") {
      tellStory();
      event.preventDefault();
    }
  }
);

$(document).ready(function () {
  $("#but").click(function () {
    var text = $(".fileserver").val();
    $("body").html(text);
  });
});
