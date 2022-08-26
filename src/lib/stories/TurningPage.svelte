<div class="turningPage">
	<div class="end" />
	<div class="spine" />
	<div class="end" />
	<div class="page" />
</div>

<style>
	.turningPage {
		height: 88px;
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 32px;
	}

	.end {
		width: 32%;
		height: 40px;
		border-bottom: 16px solid var(--text-color);
		border-radius: 16px;
	}
	.spine {
		width: 40px;
		height: 40px;
		border-bottom: 16px solid var(--text-color);
		border-radius: 18px;
	}
	@media screen and (max-width: 600px) {
		.turningPage {
			height: 40px;
		}
	}
</style>
