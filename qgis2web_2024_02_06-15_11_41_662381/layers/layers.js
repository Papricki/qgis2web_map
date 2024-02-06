var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_house_2 = new ol.format.GeoJSON();
var features_building_house_2 = format_building_house_2.readFeatures(json_building_house_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_2.addFeatures(features_building_house_2);
var lyr_building_house_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_house_2, 
                style: style_building_house_2,
                interactive: true,
                title: '<img src="styles/legend/building_house_2.png" /> building_house'
            });
var format_highway_tertiary_3 = new ol.format.GeoJSON();
var features_highway_tertiary_3 = format_highway_tertiary_3.readFeatures(json_highway_tertiary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_tertiary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_tertiary_3.addFeatures(features_highway_tertiary_3);
var lyr_highway_tertiary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_tertiary_3, 
                style: style_highway_tertiary_3,
                interactive: true,
                title: '<img src="styles/legend/highway_tertiary_3.png" /> highway_tertiary'
            });
var format_highway_unclassified_4 = new ol.format.GeoJSON();
var features_highway_unclassified_4 = format_highway_unclassified_4.readFeatures(json_highway_unclassified_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_unclassified_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_unclassified_4.addFeatures(features_highway_unclassified_4);
var lyr_highway_unclassified_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_unclassified_4, 
                style: style_highway_unclassified_4,
                interactive: true,
                title: '<img src="styles/legend/highway_unclassified_4.png" /> highway_unclassified'
            });
var format_highway_residential_5 = new ol.format.GeoJSON();
var features_highway_residential_5 = format_highway_residential_5.readFeatures(json_highway_residential_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_residential_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_residential_5.addFeatures(features_highway_residential_5);
var lyr_highway_residential_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_residential_5, 
                style: style_highway_residential_5,
                interactive: true,
                title: '<img src="styles/legend/highway_residential_5.png" /> highway_residential'
            });
var format_highway_residential2highway_residential_6 = new ol.format.GeoJSON();
var features_highway_residential2highway_residential_6 = format_highway_residential2highway_residential_6.readFeatures(json_highway_residential2highway_residential_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_residential2highway_residential_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_residential2highway_residential_6.addFeatures(features_highway_residential2highway_residential_6);
var lyr_highway_residential2highway_residential_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_residential2highway_residential_6, 
                style: style_highway_residential2highway_residential_6,
                interactive: true,
                title: '<img src="styles/legend/highway_residential2highway_residential_6.png" /> highway_residential 2 — highway_residential'
            });
var format_highway_track_7 = new ol.format.GeoJSON();
var features_highway_track_7 = format_highway_track_7.readFeatures(json_highway_track_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_track_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_track_7.addFeatures(features_highway_track_7);
var lyr_highway_track_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_track_7, 
                style: style_highway_track_7,
                interactive: true,
                title: '<img src="styles/legend/highway_track_7.png" /> highway_track'
            });
var format_highway_track2highway_track_8 = new ol.format.GeoJSON();
var features_highway_track2highway_track_8 = format_highway_track2highway_track_8.readFeatures(json_highway_track2highway_track_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_track2highway_track_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_track2highway_track_8.addFeatures(features_highway_track2highway_track_8);
var lyr_highway_track2highway_track_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_track2highway_track_8, 
                style: style_highway_track2highway_track_8,
                interactive: true,
                title: '<img src="styles/legend/highway_track2highway_track_8.png" /> highway_track 2 — highway_track'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_building_house_2.setVisible(true);lyr_highway_tertiary_3.setVisible(true);lyr_highway_unclassified_4.setVisible(true);lyr_highway_residential_5.setVisible(true);lyr_highway_residential2highway_residential_6.setVisible(true);lyr_highway_track_7.setVisible(true);lyr_highway_track2highway_track_8.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_building_house_2,lyr_highway_tertiary_3,lyr_highway_unclassified_4,lyr_highway_residential_5,lyr_highway_residential2highway_residential_6,lyr_highway_track_7,lyr_highway_track2highway_track_8];
lyr_building_house_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:province': 'addr:province', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'address': 'address', });
lyr_highway_tertiary_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', });
lyr_highway_unclassified_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'oneway': 'oneway', 'maxspeed': 'maxspeed', });
lyr_highway_residential_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'traffic_calming': 'traffic_calming', });
lyr_highway_residential2highway_residential_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name:etymology:wikidata': 'name:etymology:wikidata', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'maxspeed': 'maxspeed', });
lyr_highway_track_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_highway_track2highway_track_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_building_house_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:province': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:district': '', 'addr:country': '', 'addr:city': '', 'building:levels': '', 'addr:street': '', 'address': '', });
lyr_highway_tertiary_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', });
lyr_highway_unclassified_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'oneway': '', 'maxspeed': '', });
lyr_highway_residential_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'traffic_calming': '', });
lyr_highway_residential2highway_residential_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name:etymology:wikidata': '', 'surface': '', 'oneway': '', 'name': '', 'maxspeed': '', });
lyr_highway_track_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'barrier': '', });
lyr_highway_track2highway_track_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_building_house_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:province': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'address': 'no label', });
lyr_highway_tertiary_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', });
lyr_highway_unclassified_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', });
lyr_highway_residential_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'traffic_calming': 'no label', });
lyr_highway_residential2highway_residential_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name:etymology:wikidata': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'maxspeed': 'no label', });
lyr_highway_track_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_highway_track2highway_track_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_highway_track2highway_track_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});