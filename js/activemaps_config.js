/**
 * Created by ffoti on 12/14/13
   Modified by knaaptime on 4/11/14
 */

// list of available regions
var REGIONLIST = ["baltimore", "sandiego", "newyork", "mexicocity", "bayarea", "monterey", "sacramento", "bakersfield", "losangeles", "fresno"];
// center in lat/long of each region
var REGIONCENTERS = {"baltimore": [39.282, -76.616], "sandiego": [32.73, -117.07], "monterey": [36.78, -121.85], "sacramento": [38.57, -121.5], "bakersfield": [35.33, -119.05], "fresno": [36.77, -119.72], "bayarea": [37.7792, -122.3391], "losangeles": [34.05, -118.24], "newyork": [40.78, -73.97], "mexicocity": [19.432, -99.133]};

// default zoom level
var basezoom = 11;
var defincome = 1;

// list of mode names and mapping of modeids to colors
var modes = ["Very Low", "Low", "Moderate", "High", "Very High"];
var modecolor = function (d) {
    if (d == 3) return "red";      // moderate
    if (d == 2) return "orange";  //  low
    if (d == 1) return "yellow"; // very low
    if (d == 4) return "brown"; // high
    if (d == 5) return "purple"; // very high
}

// default bounds, these are the bounds of california
var defbounds = [[-124.475,42.223],[-114.604,32.04]];
// override bounds for other regions
var boundsd = {"newyork": [[-75.2,42.05],[-72.0,39.57]],"mexicocity":[[-99.517,19.792],[-98.66,19.079]], "baltimore": [[-77.6662,38.8512],[-75.7999,39.7218]]}

var get_file_name = function (region, income, segment) {
    var fname;
    if (region == "newyork") fname = region + "/minibats" + income + ".csv";
    else if (region == "baltimore") fname = region + "/mto" + income + ".csv";
    else fname = "batsdata/" + region + "/minibats" + income + ".csv";

    if (segment != null) {
        if (region == "newyork") fname = region + "/" + segment + ".csv";
        else if (region == "baltimore") fname = region + "/" + segment + ".csv";
        else fname = "batsdata/" + region + "/" + segment + ".csv";
        segment = null;
    }
    return fname;
}