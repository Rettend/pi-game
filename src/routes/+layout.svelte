<script lang="ts">
	import { base } from '$app/paths'
	import 'uno.css'
</script>

<main class="text-center p-1em my-0 mx-auto font-default">
	<!-- top navigation: game and about tabs -->
	<!-- show which one is active and be centered -->

	<nav class="flex justify-center">
		<a href="{base}/" class="p-1em">Game</a>
		<a href="{base}/about" class="p-1em">About</a>
	</nav>

	<slot />
</main>
