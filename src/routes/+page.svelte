<script lang="ts">
  import Game from '$components/Game.svelte'
</script>

<svelte:head>
	<title>Pi Game</title>
	<meta name="description" content="The home page of Pi Game" />
</svelte:head>

<main class="">
	<h1 class="font-header text-7xl font-normal">Pi Game</h1>
  <!-- make this a calculator -->
  <Game length={3} />
</main>

<style>
  :global(body) {
    background-color: rgb(34, 34, 34);
    color: white;
	}
</style>
