#target photoshop
function main(){
if(!documents.length) return;
var doc = activeDocument;
var oldPath = activeDocument.path;
	for(var a=0;a<doc .layerSets.length;a++){
		activeDocument.activeLayer = activeDocument.layers.getByName(doc.layerSets[a].name);
		dupLayers();
		activeDocument.mergeVisibleLayers();
		var saveFile= File(oldPath +"/"+doc.layerSets[a].name +".jpg");
		SaveJPG(saveFile);
		app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}
main();
function dupLayers() { 
    var desc143 = new ActionDescriptor();
    var ref73 = new ActionReference();
    ref73.putClass( charIDToTypeID('Dcmn') );
    desc143.putReference( charIDToTypeID('null'), ref73 );
    desc143.putString( charIDToTypeID('Nm  '), activeDocument.activeLayer.name );
    var ref74 = new ActionReference();
    ref74.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    desc143.putReference( charIDToTypeID('Usng'), ref74 );
    executeAction( charIDToTypeID('Mk  '), desc143, DialogModes.NO );
};
function SaveJPG(saveFile){
	var jpgOpts = new ExportOptionsSaveForWeb();
    jpgOpts.format = SaveDocumentType.JPEG;
    jpgOpts.includeProfile = false;
    jpgOpts.interlaced = 0;
    jpgOpts.optimized = false;
    jpgOpts.quality = 60; //0-100
	activeDocument.exportDocument(new File(saveFile),ExportType.SAVEFORWEB,jpgOpts);
}
