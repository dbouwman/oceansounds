import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    console.log('didInsertElement!');
    var metadata = [];
		metadata.push({ name: "name", label: "NAME", datatype: "string", editable: true});
		metadata.push({ name: "firstname", label:"FIRSTNAME", datatype: "string", editable: true});
		metadata.push({ name: "age", label: "AGE", datatype: "integer", editable: true});
		metadata.push({ name: "height", label: "HEIGHT", datatype: "double(m,2)", editable: true});
		metadata.push({ name: "country", label: "COUNTRY", datatype: "string", editable: true});
		metadata.push({ name: "email", label: "EMAIL", datatype: "email", editable: true});
		metadata.push({ name: "freelance", label: "FREELANCE", datatype: "boolean", editable: true});
		metadata.push({ name: "lastvisit", label: "LAST VISIT", datatype: "date", editable: true});
		// a small example of how you can manipulate the object in javascript
		metadata[4].values = {};
		metadata[4].values["Europe"] = {"be":"Belgium","fr":"France","uk":"Great-Britain","nl":"Nederland"};
		metadata[4].values["America"] = {"br":"Brazil","ca":"Canada","us":"USA"};
		metadata[4].values["Africa"] = {"ng":"Nigeria","za":"South-Africa","zw":"Zimbabwe"};
		var data = [];
		data.push({id: 1, values: {"country":"uk","age":33,"name":"Duke","firstname":"Patience","height":1.842,"email":"patience.duke@gmail.com","lastvisit":"11\/12\/2002"}});
		data.push({id: 2, values: ["Rogers","Denise",59,1.627,"us","rogers.d@gmail.com","","07\/05\/2003"]});
		data.push({id: 3, values: {"name":"Dujardin","firstname":"Antoine","age":21,"height":1.73,"country":"fr","email":"felix.compton@yahoo.fr","freelance":true,"lastvisit":"21\/02\/1999"}});
		data.push({id: 4, values: {"name":"Conway","firstname":"Coby","age":47,"height":1.96,"country":"za","email":"coby@conwayinc.com","freelance":true,"lastvisit":"01\/12\/2007"}});
		data.push({id: 5, values: {"name":"Shannon","firstname":"Rana","age":24,"height":1.56,"country":"nl","email":"ranna.shannon@hotmail.com","freelance":false,"lastvisit":"07\/10\/2009"}});
		data.push({id: 6, values: {"name":"Benton","firstname":"Jasmine","age":61,"height":1.71,"country":"ca","email":"jasmine.benton@yahoo.com","freelance":false,"lastvisit":"13\/01\/2009"}});
		data.push({id: 7, values: {"name":"Belletoise","firstname":"André","age":31,"height":1.84,"country":"be","email":"belletoise@kiloutou.be","freelance":true,"lastvisit":""}});
		data.push({id: 8, values: {"name":"Santa-Maria","firstname":"Martin","age":37,"height":1.80,"country":"br","email":"martin.sm@gmail.com","freelance":false,"lastvisit":"12\/06\/1995"}});
		data.push({id: 9, values: {"name":"Dieumerci","firstname":"Amédé","age":37,"height":1.81,"country":"ng","email":"dieumerci@gmail.com","freelance":true,"lastvisit":"05\/07\/2009"}});
		data.push({id: 10,values: {"name":"Morin","firstname":"Wanthus","age":46,"height":1.77,"country":"zw","email":"morin.x@yahoo.jsdata.com","freelance":false,"lastvisit":"04\/03\/2004"}});

		const editableGrid = new EditableGrid("DemoGridJsData");
		editableGrid.load({"metadata": metadata, "data": data});
		editableGrid.renderGrid(this.elementId, "testgrid");
  }
});