var ocena = {};
	ocena.page = 1;
	ocena.per_page = 10;

$(document).ready(
	function(){
		pregled_ocena_filter_ocena()
		$(".select-model-1").multiselect();
		$(".select-model-2").multiselect({
		  	// selectedList: 4 
		}).multiselectfilter();
	
		$(".dan-control").on('change blur focus',function (argument) {
			//ako oba imaju brojcane vrednosti
			//onda salji ajax poziv
			var dan =  $('input[name="danIzjave"]').val();
			var mesec = $('input[name="mesecIzjave"]').val();
			dan = parseInt(dan);
			mesec = parseInt(mesec);

			if (
					(typeof dan === 'number' && dan >0 && dan < 32)
				&& 
					(typeof mesec === 'number' && mesec >0 && mesec < 12)
				)
				pregled_ocena();
		})

	}
);



function pregled_ocena(){
	start_global_call_loader(); 
	ocena.tip_ocena = $('#tipovi').val();
	if($('#status_ocene').val() !== undefined){
		ocena.status_ocene = $('#status_ocene').val();
	}else{
			}
	ocena.kategorija_ocena = $('#kategorija').val();
	ocena.period = $('#period').val();
	ocena.tagovi = $('#tagovi').val();
	ocena.akter = $('#akter').val();
	ocena.dan = {"dan":$('input[name="danIzjave"]').val(),"mesec":$('input[name="mesecIzjave"]').val()};
    var call_url = "pregled_ocena_po_tipu";
	
    var call_data = {
        ocena:ocena
    } 
	
    var callback = function(odgovor){
		finish_global_call_loader(); 
        $(".ajax").html(odgovor);
		ocena.per_page = $('[name="per_page"]').val();
    } 
	
    ajax_call(call_url, call_data, callback);      
}

function change_page(page_number){
	ocena.page = page_number;
	ocena.per_page = $('[name="per_page"]').val();
	pregled_ocena();
}
 
function pregled_ocena_filter_ocena(){
	ocena.tip_ocena = $('#tipovi').val();
	if($('#status_ocene').val() !== undefined){
		ocena.status_ocene = $('#status_ocene').val();
	}else{
			}
    var call_url = "pregled_ocena_filter_ocena";
    var call_data = {
        ocena:ocena
    }
    var callback = function(odgovor){
		pregled_ocena();
        $('.ajax_ocena_filter').html(odgovor);
		$(".select-model-1").multiselect();
    }
    ajax_call(call_url, call_data, callback);    
}  
 
function reset_filtera(){
	$("select").multiselect("uncheckAll");
}  


var filters_open = false;
			function search_filter(){
				if(!filters_open){
					filters_open = true;
					$('#cd-search-filter-1-jqholder').slideDown('fast');
					$('#cd-search-filters-1-main-btn').addClass('selected');
				}else{
					filters_open = false;
					$('#cd-search-filter-1-jqholder').slideUp('fast');
					$('#cd-search-filters-1-main-btn').removeClass('selected');
				}
			}