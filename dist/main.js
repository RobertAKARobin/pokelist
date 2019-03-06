$(document).ready(async ()=>{
	const $output = $('#output')
	const pokemonCollection = await $.getJSON('./pokemon.json')

	$output.append(pokemonCollection.map(pokemon=>{
		return `<div class="pokemon ${pokemon.type.toLowerCase()}">${pokemon.id}. ${pokemon.name}<br />${pokemon.type}</div>`
	}))
})