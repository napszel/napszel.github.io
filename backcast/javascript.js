function get_weather_data(predictions, reference) {
  if (predictions) {
    return "<div><label class='date'>" + predictions[reference] + "</label>  "
      + predictions["weather_desc"]
      + "    <i class=\"" + predictions["weather_icon"] + "\"></i>    "
      + Math.round(predictions["temp_min"]) + "&#8451; &ndash; "
      + Math.round(predictions["temp_max"]) + "&#8451;</div>";
  }
}

function print_backcasts(date, city) {
  $("#backcasts").empty();
  backcasts = weather_data[date][city].backcasts;
  var i = backcasts.length - 2;
  for (i; i > -1; i--) {
    $("#backcasts").append(
      get_weather_data(backcasts[i], "date_taken") + "<br/>");
  }
}


function print_forecasts(date, city) {
  $("#forecasts").empty();

  for (var i = 1; i < 6; i++) {
    var future_date = get_future_date(i);

    // Archive mode: the old generated data may not contain future days
    // after ARCHIVE_BASE_DATE. Skip missing dates for now.
    // TODO: remove this guard once daily generation is restored.
    if (!weather_data[future_date] || !weather_data[future_date][city]) {
      continue;
    }

    var next_day = weather_data[future_date][city].backcasts;
    var forecast = get_weather_data(next_day[next_day.length - 1], "date_for") + "<br/>";
    $("#forecasts").append(forecast);
  }
}

function print_weather_data_date_for_city(date, city) {
  if (!(city in weather_data[date])) {
    city = "zurich";
  }

  $("#city_title").html(weather_data[date][city].display_name + " today");
  todays = weather_data[date][city].backcasts;
  $("#city_weather").html(get_weather_data(todays[todays.length-1], "date_taken"));

  print_backcasts(date, city);
  print_forecasts(date, city);
}

function date_to_string(date) {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

const ARCHIVE_BASE_DATE = "2026-05-31"; // TODO: remove this archive fallback once Backcast daily generation is restored.

function get_today() {
  // TODO: When GitHub Actions regenerates generated/weather_data.js daily again,
  // change this back to: return get_future_date(0);
  return ARCHIVE_BASE_DATE;
}

function get_future_date(offset) {
  // TODO: When daily generation is restored, change base date back to new Date().
  const fdate = new Date(ARCHIVE_BASE_DATE + "T12:00:00");
  fdate.setDate(fdate.getDate() + offset);
  return date_to_string(fdate);
}

$(document).ready(function() {
  function load_city_from_hash() {
    // Get the code after # in the url and load that city.
    // If there is none, load our main city.
    var city = window.location.hash.substring(1);
    if (!city) {
      city = "zurich";
    }

    print_weather_data_date_for_city(get_today(), city);
  }

  // Initial page load.
  load_city_from_hash();

  // When clicking a city link, the URL hash changes.
  // React to that hash change and update the displayed city without reloading.
  $(window).on("hashchange", load_city_from_hash);
} );

