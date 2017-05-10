(function(){

    //create the map
    var my_map = L.map('mapid', {
        center: [37, -79.6],
        zoom: 7
    });

    //add OSM base tilelayer
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(my_map);

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
