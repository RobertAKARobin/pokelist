$(document).ready(async ()=>{
	const $pokemonList = $('#pokemon-list')
	const $pokemonTypes = $('#pokemon-types')
	const pokemonList = await $.getJSON('./pokemon.json')
	const pokemonTypes = Object.keys(pokemonList.reduce((types, pokemon)=>{
		types[pokemon.type] = 1
		return types
	}, {})).sort()

	$pokemonList.append(pokemonList.map(pokemon=>{
		return `<div class="type-${pokemon.type.toLowerCase()}"><h2>${pokemon.id}. ${pokemon.name}</h2>${pokemon.type}</div>`
	}))

	$pokemonTypes.append(pokemonTypes.map(type=>{
		return `<div class="type-${type.toLowerCase()}">${type}</div>`
	}))
})