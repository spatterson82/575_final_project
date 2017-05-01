(function(){

    //create the map
    var my_map = L.map('mapid', {
        center: [37, -79.6],
        zoom: 7
    });

    //add OSM base tilelayer
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(my_map);


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

    var file_list = ['North_Carolina_1_to_1.geojson',
                    'North_Carolina_2_to_2.geojson',
                    'North_Carolina_3_to_7.geojson',
                    'North_Carolina_8_to_12.geojson',
                    'North_Carolina_13_to_27.geojson',
                    'North_Carolina_28_to_29.geojson',
                    'North_Carolina_30_to_32.geojson',
                    'North_Carolina_33_to_36.geojson',
                    'North_Carolina_40_to_42.geojson',
                    'North_Carolina_43_to_47.geojson',
                    'North_Carolina_48_to_48.geojson',
                    'North_Carolina_49_to_52.geojson',
                    'North_Carolina_53_to_54.geojson',
                    'North_Carolina_55_to_55.geojson',
                    'North_Carolina_56_to_56.geojson',
                    'North_Carolina_57_to_57.geojson',
                    'North_Carolina_58_to_60.geojson',
                    'North_Carolina_61_to_62.geojson',
                    'North_Carolina_63_to_72.geojson',
                    'North_Carolina_73_to_77.geojson',
                    'North_Carolina_78_to_87.geojson',
                    'North_Carolina_88_to_89.geojson',
                    'North_Carolina_90_to_90.geojson',
                    'North_Carolina_91_to_92.geojson',
                    'North_Carolina_93_to_97.geojson',
                    'North_Carolina_98_to_102.geojson',
                    'North_Carolina_103_to_105.geojson',
                    'North_Carolina_106_to_106.geojson',
                    'North_Carolina_107_to_107.geojson',
                    'North_Carolina_108_to_112.geojson']

    var date_list = ['March 4, 1789 to March 3, 1791',
                'March 4, 1791 to March 2, 1793',
                'March 4, 1793 to March 3, 1803',
                'October 17, 1803 to March 3, 1813',
                'May 24, 1813 to March 3, 1843',
                'December 4, 1843 to March 3, 1847',
                'December 6, 1847 to March 3, 1853',
                'March 4, 1853 to March 3, 1861',
                'March 4, 1867 to March 3, 1873',
                'March 4, 1873 to March 3, 1883',
                'December 3, 1883 to March 3, 1885',
                'March 4, 1885 to March 3, 1893',
                'March 4, 1893 to March 3, 1897',
                'March 4, 1897 to March 3, 1899',
                'December 4, 1899 to March 3, 1901',
                'March 4, 1901 to March 3, 1903',
                'March 5, 1903 to March 3, 1909',
                'March 4, 1909 to March 3, 1913',
                'March 4, 1913 to March 3, 1933',
                'March 4, 1933 to December 16, 1942',
                'January 6, 1943 to October 13, 1962',
                'January 9, 1963 to October 22, 1966',
                'January 10, 1967 to October 14, 1968',
                'January 3, 1969 to October 18, 1972',

                'January 3, 1973 to December 23, 1982',
                'January 3, 1983 to October 9, 1992',
                'January 5, 1993 to December 19, 1998',
                'January 6, 1999 to December 15, 2000',
                'January 3, 2001 to November 22, 2002',
                'January 7, 2003 to January 3, 2013']

    //function to instantiate the Leaflet map
    function createMap(){
        //call getData function
        getData(my_map, file_list[0] + ' 0');
        set_checkboxes();
        $('input[text="North_Carolina_1_to_1.geojson"]').prop('checked', true);
    };


    // load and color geojson
    function getData(my_map, json_string) {
        var sub = ' ';
        var index_number = json_string.indexOf(sub);
        var json_filename = json_string.slice(0,index_number);
        var ind = json_string.slice(index_number, json_string.length);

        $.ajax('data/geojson/' + json_filename, {
            dataType: "json",
            success: function (response) {
                var json_name = L.geoJson(response, {
                    style: function (feature) {
                        if (get_json_item(feature, 'party') === 'Republican') {
                            return {color: "#ff0000"};
                        } else if (get_json_item(feature, 'party') === 'Democrat') {
                            return {color: "#0000ff"};
                        } else if (get_json_item(feature, 'party') === 'Whig') {
                            return {color: "#14c814"};
                        } else if (get_json_item(feature, 'party') === 'Populist') {
                            return {color: "#c5c80c"};
                        } else if (get_json_item(feature, 'party') === 'Anti-Administration') {
                            return {color: "#c8b167"};
                        } else if (get_json_item(feature, 'party') === 'Pro-Administration') {
                            return {color: "#69c8b0"};
                        } else {
                            return {color: "#9f4df0"};
                        }
                    },
                    onEachFeature: function (feature, layer) {
                        var party = get_json_item(feature, 'party');
                        var name = get_json_item(feature, 'name');
                        var district = get_json_item(feature, 'district');

                        layer.bindPopup('<b>Name:</b> ' + name + '<br />' +
                        '<b>District:</b> ' + district + '<br />' +
                        '<b>Party:</b> ' + party),
                        layer.on('mouseover', function (e) {
                           this.openPopup();
                        }),
                        layer.on('mouseout', function (e) {
                            this.closePopup();
                        });
                    }
                });
                json_name.addTo(my_map);

                set_footer_info(response);
                get_map_title(json_filename, ind);

                var layerBounds = json_name.getBounds();
                my_map.fitBounds(layerBounds);

            }
        });
    }


    // set footer information
    function set_footer_info(data_response) {
        var f = data_response.features;
        for (var i in f) {
            var id = f[i].properties.id;
            var party = get_json_item(f[i], 'party');
            var name = get_json_item(f[i], 'name');
            var district = get_json_item(f[i], 'district');

            var table_data = '<tr><td><b>Name: </b>' + name + '</td><td><b>Party: </b>' + party + '</td><td><b>District: </b>' + district + '</td><td><b>ID: </b>' + id + '</td></tr>';
            $("#footer_table").append(table_data);
        }

    }

    // Set title of map
    function get_map_title(json, ind) {
        var json_text = $('input[text="' + json + '"]').val();
        var title_block = '<h2 id="district">' + json_text + '</h2><br>' +
            '<p>' + date_list[Number(ind)] + '</p>';
        $('#title_block').html(title_block);
    }

    // function to clear all layers
    function clearLayer() {
        $('#footer_table').empty();
        my_map.eachLayer(function(layer) {
            if (layer.feature) {
                my_map.removeLayer(layer);
            };
        });
    };


    // parse JSON to obtain values
    function get_json_item(feature, item) {
        for (var i in feature.properties.member) {
            var member = feature.properties.member[i];
            for (var j in member) {
                return member[j][item];
            }
        }
    }



    function set_checkboxes() {
        $('input[text="North_Carolina_1_to_1.geojson"]').change(function() {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_1_to_1.geojson' + '0');
            } else {
                clearLayer();

            }
        });

        $('input[text="North_Carolina_2_to_2.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_2_to_2.geojson '+ '1');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_3_to_7.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_3_to_7.geojson '+ '2');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_8_to_12.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_8_to_12.geojson '+ '3');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_13_to_27.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_13_to_27.geojson '+ '4');
            } else {
                clearLayer();
                ;
            }
        });

        $('input[text="North_Carolina_28_to_29.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_28_to_29.geojson '+ '5');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_30_to_32.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_30_to_32.geojson '+ '6');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_33_to_36.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_33_to_36.geojson '+ '7');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_40_to_42.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_40_to_42.geojson '+ '8');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_43_to_47.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_43_to_47.geojson '+ '9');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_48_to_48.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_48_to_48.geojson '+ '10');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_49_to_52.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_49_to_52.geojson '+ '11');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_53_to_54.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_53_to_54.geojson '+ '12');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_55_to_55.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_55_to_55.geojson '+ '13');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_56_to_56.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_56_to_56.geojson '+ '14');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_57_to_57.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_57_to_57.geojson '+ '15');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_58_to_60.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_58_to_60.geojson '+ '16');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_61_to_62.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_61_to_62.geojson '+ '17');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_63_to_72.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_63_to_72.geojson '+ '18');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_73_to_77.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_73_to_77.geojson '+ '19');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_78_to_87.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_78_to_87.geojson '+ '20');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_88_to_89.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_88_to_89.geojson '+ '21');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_90_to_90.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_90_to_90.geojson '+ '22');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_91_to_92.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_91_to_92.geojson '+ '23');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_93_to_97.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_93_to_97.geojson '+ '24');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_98_to_102.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_98_to_102.geojson '+ '25');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_103_to_105.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_103_to_105.geojson '+ '26');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_106_to_106.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_106_to_106.geojson '+ '27');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_107_to_107.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_107_to_107.geojson '+ '28');
            } else {
                clearLayer();
            }
        });

        $('input[text="North_Carolina_108_to_112.geojson"]').change(function () {
            if (this.checked) {
                clearLayer();
                getData(my_map, 'North_Carolina_108_to_112.geojson '+ '29');
            } else {
                clearLayer();
            }
        });
    };



    $(document).ready(createMap);
})();
