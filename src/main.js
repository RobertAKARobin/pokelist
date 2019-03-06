$(document).ready(async ()=>{
	const $output = $('#output')
	const pokemon = await $.getJSON('./pokemon.json')

	$output.text(JSON.stringify(pokemon))
})