/*
 * TEST DATEI FÜR DATATABLES
 */


$.post("../HTML/database-request.php",{list: "all", abfrage: "liste"},function(data){
//	allData = data;
	if(data!=null)
	{
		pObject=JSON.parse(data);
	}
	console.log(pObject);
	loadTable(pObject);
	
});
	
	

function loadTable(allData){
	$('#pokeList').DataTable({
		aaData: allData,
		paging: false,
		searching: false,
		info: false,
		scrollY: true,
		scrollX: true,
		columnDefs: [{
			render: function(data,type,row){
				return '<img src="../Graphics/Bilder/'+data'">';
		}, targets: [0]
		}]
		aoColumns: [
		{
			mData:'GRAFIK_ID',
		},
		{
			mData:'PKMN_ID',
		},
		{
			mData:'PKMN_NAME',
		}]
		
	})
}