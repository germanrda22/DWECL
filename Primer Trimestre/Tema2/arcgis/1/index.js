require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/geometry/geometryEngine",
    "esri/widgets/Search",
    "esri/core/watchUtils"
],
function (esriConfig, Map, MapView, Graphic, geometryEngine, Search, watchUtils) {

    const authentication = new arcgisRest.ApiKey({
        key: "AAPK2f8f49ac8e4e4fdea687323568511d6bm6JL6QWhyU34iT80U2Kz9RXer68yAgxFeRRT0KwPMWoL0_kRDmsnXXN0O5-A-9xg"
    });

    esriConfig.apiKey = "AAPK2f8f49ac8e4e4fdea687323568511d6bm6JL6QWhyU34iT80U2Kz9RXer68yAgxFeRRT0KwPMWoL0_kRDmsnXXN0O5-A-9xg";

    const map = new Map({
        basemap: "arcgis-navigation"
    });

    const view = new MapView({
        map: map,
        center: [-3.598511, 37.176852], // Granada, Spain
        zoom: 4,
        container: "viewDiv",
    });

    const search = new Search({
        view: view
    });
    view.ui.add(search, "top-right");

    view.when(() => {
        watchUtils.once(search, "activeSource", (loaded) => {
            if (loaded) {
                search.popupEnabled = false;
                search.activeSource.placeholder = "Find facts for cities or places";
            }
            getDemographicData("Granada", view.center)
        });
    });

    search.on("select-result", (event) => {
        if (!event.result) {
            return;
        }
        getDemographicData(event.result.name, event.result.feature.geometry);
    });

    view.on("click", e => {

        const params = {
            location: e.mapPoint,
            outFields: "*"
        };
        search.activeSource.locator.locationToAddress(params)

            .then(function (response) { // Show the address found
                const city = response.attributes.City || response.attributes.Region;
                getDemographicData(city, params.location);
            }, function (err) { // Show no address found
                view.graphics.removeAll();
                console.log("No address found.");
            });

    });

    function getDemographicData(city, point) {

        // Request demographic data
        arcgisRest.queryDemographicData({
            studyAreas: [{
                "geometry": {
                    "x": point.longitude,
                    "y": point.latitude
                }
            }],
            authentication: authentication
        })

        .then((response) => {
            if (response.results[0].value.FeatureSet.length > 0 &&
              response.results[0].value.FeatureSet[0].features.length > 0) {
                const attributes = response.results[0].value.FeatureSet[0].features[0].attributes;
                showData(city, attributes, point);
            }
            else {
                console.log("No data found.");
            }
        });

    }

    function showData(city, attributes, point) {
        const title = `Global facts near ${city}`;
        const content =
            `Population: ${attributes.TOTPOP}<br>Males: ${attributes.TOTMALES} <br>Females: ${attributes.TOTFEMALES}<br>Average Household Size: ${attributes.AVGHHSZ}`;

        view.popup.open({
            location: point,
            title: title,
            content: content
        });

        const buffer = geometryEngine.geodesicBuffer(point, 1, "miles");
        const graphicBuffer = new Graphic({
            geometry: buffer,
            symbol: {
                type: "simple-fill",
                color: [50, 50, 50, 0.1],
                outline: {
                    color: [0, 0, 0, 0.25],
                    width: .5
                }
            }
        })
        view.graphics.removeAll();
        view.graphics.add(graphicBuffer);

    }

});