<script lang="ts">
	import { getPi } from '$lib/game'

	// Define the props that you want to pass to the component
	export let length: number

	let pi = getPi(length)
	let input = ''
	let gameOver = false 
	let message = ''

  $: input = input.replace(',', '.')

	function handleSubmit(event: Event) {
		event.preventDefault()
		if (input === pi) {
			length++
			pi = getPi(length)
			input = ''
		} else {
			gameOver = true
			message = `Game over! You reached ${length} digits.`
		}
	}

	async function handleRestart() {
		gameOver = false 
		message = ''
		length = 3
		pi = getPi(length)
		input = '' 
	}
</script>

<!-- Define the HTML elements that you need for the component -->
<div class="container">
	<div class="level">Length: {length}</div>
	<p class="pi">{pi}</p>
	{#if !gameOver}
		<form class="form" on:submit={handleSubmit}>
			<input class="input" type="text" bind:value={input} maxlength={length} />
			<button class="button" type="submit">Submit</button>
		</form>
	{:else}
		<p class="message">{message}</p>
		<button class="button" on:click={handleRestart}>Restart</button>
	{/if}
</div>

<style>
	/* Define the CSS styles that you need for the component */
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 2rem;
	}

	.level {
		font-size: 2rem;
		font-weight: bold;
	}

	.pi {
		font-size: 1.5rem;
		font-family: monospace;
		margin: 1rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.input {
		font-size: 1.5rem;
		font-family: monospace;
		width: 10rem;
		text-align: center;
	}

	.button {
		font-size: 1.5rem;
		margin: 1rem;
	}

	.message {
		font-size: 1.5rem;
		color: red;
		margin: 1rem;
	}
</style>
