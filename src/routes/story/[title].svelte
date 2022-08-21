<script>
	import { page } from '$app/stores';
	const title = $page.url.pathname;
	const renderTitle = (pathname) => {
		const trimStory = pathname.slice(7);
		const result = trimStory.split('%20').join(' ');
		return result;
	};
</script>

<div class="story">
	{renderTitle(title)}
</div>
