(function(){

    // var file_list = ["Alabama_103_to_107.geojson",
    //     "Alabama_108_to_112.geojson",
    //     "Alabama_90_to_92.geojson",
    //     "Arizona_103_to_107.geojson",
    //     "Arizona_108_to_108.geojson",
    //     "Arizona_109_to_112.geojson",
    //     "Arkansas_103_to_107.geojson",
    //     "Arkansas_108_to_112.geojson",
    //     "Arkansas_90_to_92.geojson",
    //     "California_103_to_107.geojson",
    //     "California_108_to_112.geojson",
    //     "California_94_to_97.geojson",
    //     "Colorado_103_to_107.geojson",
    //     "Colorado_108_to_112.geojson",
    //     "Colorado_89_to_92.geojson",
    //     "Connecticut_103_to_107.geojson",
    //     "Connecticut_108_to_112.geojson",
    //     "Connecticut_89_to_92.geojson",
    //     "Delaware_103_to_112.geojson",
    //     "Delaware_13_to_17.geojson",
    //     "Delaware_18_to_97.geojson",
    //     "District_Of_Columbia_98_to_102.geojson",
    //     "Florida_103_to_104.geojson",
    //     "Florida_105_to_107.geojson",
    //     "Florida_108_to_112.geojson",
    //     "Georgia_103_to_103.geojson",
    //     "Georgia_104_to_104.geojson",
    //     "Georgia_105_to_107.geojson",
    //     "Idaho_103_to_107.geojson",
    //     "Idaho_108_to_112.geojson",
    //     "Idaho_90_to_92.geojson",
    //     "Illinois_103_to_107.geojson",
    //     "Illinois_108_to_112.geojson",
    //     "Illinois_90_to_92.geojson",
    //     "Indiana_103_to_107.geojson",
    //     "Indiana_108_to_112.geojson",
    //     "Indiana_91_to_92.geojson",
    //     "Iowa_103_to_107.geojson",
    //     "Iowa_108_to_112.geojson",
    //     "Iowa_88_to_92.geojson",
    //     "Kansas_103_to_107.geojson",
    //     "Kansas_108_to_112.geojson",
    //     "Kansas_90_to_92.geojson",
    //     "Kentucky_103_to_104.geojson",
    //     "Kentucky_105_to_107.geojson",
    //     "Kentucky_108_to_112.geojson",
    //     "Louisiana_103_to_103.geojson",
    //     "Louisiana_104_to_104.geojson",
    //     "Louisiana_105_to_107.geojson",
    //     "Maine_103_to_103.geojson",
    //     "Maine_104_to_107.geojson",
    //     "Maine_108_to_108.geojson",
    //     "Maryland_103_to_107.geojson",
    //     "Maryland_108_to_112.geojson",
    //     "Maryland_1_to_2.geojson",
    //     "Massachusetts_103_to_107.geojson",
    //     "Massachusetts_108_to_112.geojson",
    //     "Massachusetts_13_to_13.geojson",
    //     "Michigan_103_to_107.geojson",
    //     "Michigan_108_to_112.geojson",
    //     "Michigan_24_to_27.geojson",
    //     "Minnesota_103_to_103.geojson",
    //     "Minnesota_104_to_107.geojson",
    //     "Minnesota_108_to_112.geojson",
    //     "Mississippi_103_to_107.geojson",
    //     "Mississippi_108_to_112.geojson",
    //     "Mississippi_15_to_22.geojson",
    //     "Missouri_103_to_107.geojson",
    //     "Missouri_108_to_112.geojson",
    //     "Missouri_17_to_21.geojson",
    //     "Montana_103_to_112.geojson",
    //     "Montana_51_to_62.geojson",
    //     "Montana_63_to_65.geojson",
    //     "Nebraska_103_to_107.geojson",
    //     "Nebraska_108_to_112.geojson",
    //     "Nebraska_39_to_46.geojson",
    //     "Nevada_103_to_107.geojson",
    //     "Nevada_108_to_112.geojson",
    //     "Nevada_38_to_41.geojson",
    //     "New_Hampshire_103_to_107.geojson",
    //     "New_Hampshire_108_to_112.geojson",
    //     "New_Hampshire_13_to_22.geojson",
    //     "New_Jersey_103_to_105.geojson",
    //     "New_Jersey_106_to_107.geojson",
    //     "New_Jersey_108_to_112.geojson",
    //     "New_Mexico_103_to_107.geojson",
    //     "New_Mexico_108_to_112.geojson",
    //     "New_Mexico_62_to_62.geojson",
    //     "New_York_103_to_105.geojson",
    //     "New_York_106_to_107.geojson",
    //     "New_York_108_to_112.geojson",
    //     "North_Carolina_103_to_105.geojson",
    //     "North_Carolina_106_to_106.geojson",
    //     "North_Carolina_107_to_107.geojson",
    //     "North_Dakota_103_to_112.geojson",
    //     "North_Dakota_51_to_57.geojson",
    //     "North_Dakota_58_to_62.geojson",
    //     "Ohio_100_to_102.geojson",
    //     "Ohio_103_to_104.geojson",
    //     "Ohio_105_to_107.geojson",
    //     "Oklahoma_103_to_107.geojson",
    //     "Oklahoma_108_to_112.geojson",
    //     "Oklahoma_60_to_62.geojson",
    //     "Oregon_103_to_107.geojson",
    //     "Oregon_108_to_112.geojson",
    //     "Oregon_35_to_52.geojson",
    //     "Pennsylvania_103_to_107.geojson",
    //     "Pennsylvania_108_to_108.geojson",
    //     "Pennsylvania_109_to_112.geojson",
    //     "Rhode_Island_103_to_107.geojson",
    //     "Rhode_Island_108_to_112.geojson",
    //     "Rhode_Island_1_to_2.geojson",
    //     "South_Carolina_103_to_103.geojson",
    //     "South_Carolina_104_to_112.geojson",
    //     "South_Carolina_13_to_14.geojson",
    //     "South_Dakota_103_to_107.geojson",
    //     "South_Dakota_108_to_112.geojson",
    //     "South_Dakota_51_to_62.geojson",
    //     "Tennessee_103_to_107.geojson",
    //     "Tennessee_108_to_112.geojson",
    //     "Tennessee_10_to_10.geojson",
    //     "Texas_103_to_104.geojson",
    //     "Texas_105_to_106.geojson",
    //     "Texas_107_to_107.geojson",
    //     "Utah_103_to_107.geojson",
    //     "Utah_108_to_112.geojson",
    //     "Utah_54_to_62.geojson",
    //     "Vermont_103_to_112.geojson",
    //     "Vermont_13_to_16.geojson",
    //     "Vermont_17_to_17.geojson",
    //     "Virginia_103_to_103.geojson",
    //     "Virginia_104_to_105.geojson",
    //     "Virginia_106_to_107.geojson",
    //     "Washington_103_to_107.geojson",
    //     "Washington_108_to_112.geojson",
    //     "Washington_51_to_52.geojson",
    //     "West_Virginia_98_to_102.geojson",
    //     "West_Virginia_103_to_107.geojson",
    //     "West_Virginia_108_to_112.geojson",
    //     "Wisconsin_103_to_107.geojson",
    //     "Wisconsin_108_to_112.geojson",
    //     "Wisconsin_30_to_30.geojson",
    //     "Wyoming_103_to_112.geojson",
    //     "Wyoming_51_to_97.geojson",
    //     "Wyoming_98_to_102.geojson"];

    var file_list = ["North_Carolina_107_to_107.geojson"]
        // "North_Carolina_106_to_106.geojson",
        // "North_Carolina_107_to_107.geojson"]
        //
    var states_list = [ "Mississippi",
        "Oklahoma",
        "Delaware",
        "Minnesota",
        "Illinois",
        "Arkansas",
        "Indiana",
        "Maryland",
        "Louisiana",
        "District_Of",
        "Idaho",
        "New_York",
        "Tennessee",
        "Arizona",
        "Iowa",
        "Michigan",
        "Kansas",
        "Utah",
        "Virginia",
        "Oregon",
        "New_Hampshire",
        "Connecticut",
        "Montana",
        "California",
        "Massachusetts",
        "New_Mexico",
        "South_Dakota",
        "Wisconsin",
        "Vermont",
        "Georgia",
        "Pennsylvania",
        "Florida",
        "Alaska",
        "Kentucky",
        "Hawaii",
        "Nebraska",
        "North_Dakota",
        "Missouri",
        "Ohio",
        "Alabama",
        "New_Jersey",
        "Wyoming",
        "Colorado",
        "Washington",
        "South_Carolina",
        "Rhode_Island",
        "North_Carolina",
        "Texas",
        "Nevada",
        "Maine"];


    //function to instantiate the Leaflet map
    function createMap(){
        //create the map
        var my_map = L.map('mapid', {
            center: [36, -79.6],
            zoom: 7
        });

        //add OSM base tilelayer
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(my_map);

        //call getData function
        getData(my_map);
    };


    // var panelContent = "<p><b>Congressman:</b></p>";
    //
    // function createPopup(feature, layer, radius) {
    //     var popupContent = feature.properties.gage;
    //
    //     layer.bindPopup(popupContent, {
    //         offset: new L.Point(0, -radius),
    //         closeButton: false
    //     });
    // };


    // load and color geojson
    function getData(my_map) {
        $.ajax("data/geojson/" + file_list[0], {
            dataType: "json",
            success: function (response) {
                var geojson_layer = L.geoJson(response, {
                    style: function (feature) {
                        switch (get_json_item(feature, 'party')) {
                            case 'Republican':
                                return {color: "#ff0000"};
                            case 'Democrat':
                                return {color: "#0000ff"};
                        }
                    },
                    onEachFeature: function (feature, layer) {
                        var party = get_json_item(feature, 'party');
                        var name = get_json_item(feature, 'name');
                        var district = get_json_item(feature, 'district');

                        layer.bindPopup('Name: ' + name + '<br />' +
                                        'District: ' + district + '<br />' +
                                        'Party: ' + party);
                    }
                })
                geojson_layer.addTo(my_map);
            }
        });
    }


    // parse JSON to obtain values
    function get_json_item(feature, item) {
        for (var i in feature.properties.member) {
            var member = feature.properties.member[i];
            for (var j in member) {
                return member[j][item];
            }
        }
    }


    $(document).ready(createMap);
})();
