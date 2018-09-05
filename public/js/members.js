$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/userData").then(function (data) {
    console.log(data);
    $(".member-email").text(data.email);
    $(".member-name").text(data.firstName);
  }); 
});

var $nameConfirm = $("#name-confirm");
var $reserveOption = $("#reserveoption");
var $reserveBtn = $("#reserveBtn");

var API = {
  saveReservation: function(reservation) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/reservation",
      data: JSON.stringify(reservation)
    });
  },
  getReservation: function() {
    return $.ajax({
      url: "api/reservation",
      type: "GET"
    });
  }
};

var refreshReservation = function() {
  API.getReservations().then(function(data) {
    console.log(data);
  });
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var reservation = {
    client_name: $nameConfirm.val().trim(),
    class_id: $reserveOption.val().trim()
  };

  if (!(reservation.client_name && reservation.class_id)) {
    alert("You must enter your name and select option!")
    return;
  }

  API.saveReservation(reservation).then(function() {
    $("#centralModalSuccess").modal('toggle');
    refreshReservation();
  });

  $nameConfirm.val("");
  $reserveOption.val("");
};

// Event listener to submit button
$reserveBtn.on("click", handleFormSubmit);