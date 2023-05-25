var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_adm_pku_new_1 = new ol.format.GeoJSON();
var features_adm_pku_new_1 = format_adm_pku_new_1.readFeatures(json_adm_pku_new_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_pku_new_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_pku_new_1.addFeatures(features_adm_pku_new_1);
var lyr_adm_pku_new_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adm_pku_new_1, 
                style: style_adm_pku_new_1,
                interactive: true,
                title: '<img src="styles/legend/adm_pku_new_1.png" /> adm_pku_new'
            });
var format_pendidikan_new_2 = new ol.format.GeoJSON();
var features_pendidikan_new_2 = format_pendidikan_new_2.readFeatures(json_pendidikan_new_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_new_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_new_2.addFeatures(features_pendidikan_new_2);
var lyr_pendidikan_new_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pendidikan_new_2, 
                style: style_pendidikan_new_2,
                interactive: true,
                title: '<img src="styles/legend/pendidikan_new_2.png" /> pendidikan_new'
            });
var format_jalan_new2_3 = new ol.format.GeoJSON();
var features_jalan_new2_3 = format_jalan_new2_3.readFeatures(json_jalan_new2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_new2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_new2_3.addFeatures(features_jalan_new2_3);
var lyr_jalan_new2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_new2_3, 
                style: style_jalan_new2_3,
                interactive: true,
    title: 'jalan_new2<br />\
    <img src="styles/legend/jalan_new2_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/jalan_new2_3_1.png" /> Jalan Kolektor<br />'
        });
var format_pemerintah_new_4 = new ol.format.GeoJSON();
var features_pemerintah_new_4 = format_pemerintah_new_4.readFeatures(json_pemerintah_new_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemerintah_new_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintah_new_4.addFeatures(features_pemerintah_new_4);
var lyr_pemerintah_new_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemerintah_new_4, 
                style: style_pemerintah_new_4,
                interactive: true,
    title: 'pemerintah_new<br />\
    <img src="styles/legend/pemerintah_new_4_0.png" /> Instalasi TNI (AD/AL/AU)<br />\
    <img src="styles/legend/pemerintah_new_4_1.png" /> Kantor Camat<br />\
    <img src="styles/legend/pemerintah_new_4_2.png" /> Kantor Gubernur<br />\
    <img src="styles/legend/pemerintah_new_4_3.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/pemerintah_new_4_4.png" /> Kantor Lurah<br />\
    <img src="styles/legend/pemerintah_new_4_5.png" /> Kantor Polisi<br />\
    <img src="styles/legend/pemerintah_new_4_6.png" /> Kantor Wali Kota<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_adm_pku_new_1.setVisible(true);lyr_pendidikan_new_2.setVisible(true);lyr_jalan_new2_3.setVisible(true);lyr_pemerintah_new_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_adm_pku_new_1,lyr_pendidikan_new_2,lyr_jalan_new2_3,lyr_pemerintah_new_4];
lyr_adm_pku_new_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_pendidikan_new_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_jalan_new2_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_pemerintah_new_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_adm_pku_new_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_pendidikan_new_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'Range', 'JLPDDK': 'Range', 'FGGPDK': 'Range', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'Range', 'JNSPDL': 'Range', });
lyr_jalan_new2_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_pemerintah_new_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'Range', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_adm_pku_new_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'inline label', 'WIADKK': 'no label', 'WADMPR': 'inline label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_pendidikan_new_2.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'inline label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_jalan_new2_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_pemerintah_new_4.set('fieldLabels', {'NAMOBJ': 'inline label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_pemerintah_new_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});