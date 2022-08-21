<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	const created_at = $page.url.pathname.slice(7);
	let displayStory;
	onMount(() => {
		fetch(`http://localhost:5000/api/file?added=${created_at}`)
			.then((res) => res.json())
			.then((data) => {
				displayStory = data;
			});
	});
	const getStory = () => {};
</script>

<div class="story">
	{JSON.stringify(displayStory)}
</div>
