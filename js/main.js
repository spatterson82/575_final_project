(function(){

    // dimension
    var width = window.innerWidth * .5,
        height = 500;

    // d3 map container
    var map = d3.select("body")
        .append('svg')
        .attr('class', 'map')
        .attr('width', width)
        .attr('height', height);

    window.onload = get_geojson_array();


    // choropleth map
    function setMap() {
        // map projection
        var projection = d3.geoAlbersUsa();

        var path = d3.geoPath()
            .projection(projection);

        d3.queue()
            .defer(d3.csv, 'data/Groundwater_water_withdrawels.csv')
            .defer(d3.json, 'data/US_States.topojson')
            .await(callback);

    };

    function get_geojson_array() {
        for (var)
    };

})();
