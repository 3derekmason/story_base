<script>
	import Upload from 'svelte-material-icons/Upload.svelte';
	import ChartBubble from 'svelte-material-icons/ChartBubble.svelte';
	import CodeBraces from 'svelte-material-icons/CodeBraces.svelte';
	import Dumbbell from 'svelte-material-icons/Dumbbell.svelte';
	import HospitalBox from 'svelte-material-icons/HospitalBox.svelte';

	const tagOptions = {
		life: false,
		programming: false,
		training: false,
		wellness: false
	};
	let newStory = {
		title: '',
		authorFirst: '',
		authorLast: '',
		body: '',
		tags: []
	};
	let newFile = '';

	const addTag = (tag) => {
		if (!newStory.tags.includes(tag)) {
			newStory.tags.push(tag);
			tagOptions[tag] = true;
		}
	};

	const submitFile = () => {
		fetch('https://thestorybase.herokuapp.com/api/stories', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newStory)
		})
			.then((data) => console.log(data))
			.catch((err) => console.error(err));

		let formData = new FormData();
		formData.append('file', newFile);
		fetch('https://thestorybase.herokuapp.com/api/files', {
			method: 'POST',
			'Content-Type': 'multipart/form-data',
			body: formData
		})
			.then(() => {
				console.log('Thanks for the submission!');
			})
			.catch((err) => {
				console.error(err);
			});
		newFile = '';
		newStory = {
			title: '',
			authorFirst: '',
			authorLast: '',
			body: '',
			tags: []
		};
	};
	const editFile = (e) => {
		e.preventDefault();
		const files = e.target.files;
		const fileReader = new FileReader();
		fileReader.readAsDataURL(files[0]);
		newFile = files[0];
	};
</script>

<section>
	<h1>Submit your story!</h1>

	<div class="row">
		<input
			type="text"
			class="input-lg"
			bind:value={newStory.title}
			placeholder="Title of your story"
		/>
	</div>
	<div class="row">
		<input type="text" bind:value={newStory.authorFirst} placeholder="First name" />
		<input type="text" bind:value={newStory.authorLast} placeholder="Last name" />
	</div>
	<div class="row">
		<textarea
			class="input-lg"
			name="body"
			rows="2"
			bind:value={newStory.body}
			placeholder="Little summary of your story..."
		/>
	</div>
	<div class="row">
		<p>Tags:</p>

		<button
			disabled={tagOptions.life}
			class="tag"
			on:click={() => {
				addTag('life');
			}}>Life <ChartBubble size="16" /></button
		>

		<button
			disabled={tagOptions.programming}
			class="tag"
			on:click={() => {
				addTag('programming');
			}}>Programming <CodeBraces size="16" /></button
		>

		<button
			disabled={tagOptions.training}
			class="tag"
			on:click={() => {
				addTag('training');
			}}>Training <Dumbbell size="16" /></button
		>

		<button
			disabled={tagOptions.wellness}
			class="tag"
			on:click={() => {
				addTag('wellness');
			}}>Wellness <HospitalBox size="16" /></button
		>
	</div>
	<div class="row">
		<h2>Upload File</h2>
		{#if !newFile}
			<label class="file-upload">
				Choose file
				<input type="file" name="newFile" accept=" .md, .pdf" on:input={editFile} />
			</label>
		{:else}
			<label class="file-uploaded">
				{newFile.name}
				<input type="file" name="newFile" accept=" .md, .pdf" on:input={editFile} />
			</label>
		{/if}
		<button disabled={!newFile} on:click={submitFile}><Upload size="28" color="#444444" /></button>
	</div>
	<h4>or</h4>
	<h2>
		Email submissions to <a href="mailto:thestorybase@gmail.com" class="email"
			>thestorybase@gmail.com</a
		>
	</h2>
</section>

<style>
	section {
		width: 100%;
		height: var(--view-height);
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		width: 100%;
		height: 64px;
	}

	h1 {
		margin: 0;
		width: 100%;
		height: 140px;
		font-weight: 400;
		font-size: 72px;
		letter-spacing: 2px;
		display: grid;
		place-content: center;
		background-image: radial-gradient(
			ellipse at left,
			var(--accent-color),
			var(--color-main),
			var(--color-main-light),
			60%,
			var(--accent-color)
		);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}
	h4 {
		margin: none;
		padding: none;
	}

	button {
		border: 1px solid var(--color-story-light);
		box-shadow: 0px 2px 0px var(--color-story);
		background: none;
		cursor: pointer;
		border-radius: 50%;
		transition: 0.1s;
	}
	button:disabled {
		box-shadow: none;
		transform: translateY(2px);
		cursor: default;
	}
	button:active {
		box-shadow: none;
		transform: translateY(2px);
	}

	button.tag {
		width: 88px;
		height: 40px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2px;
		font-size: 10px;
		font-family: 'Courier New', Courier, monospace;
		color: #fff;
		background: var(--color-story);
		border: 1px solid var(--color-story);
		box-shadow: 0px 2px 0px var(--accent-color);
	}
	button.tag:disabled,
	button.tag:active {
		box-shadow: none;
		transform: translateY(2px);
		background: var(--color-story-light);
	}

	input {
		width: 240px;
		border: none;
		height: 40px;
		background: none;
		border-bottom: 1px solid var(--color-story);
	}

	.input-lg {
		width: 504px;
		border: none;
		height: 56px;
		border-bottom: 1px solid var(--color-story);
	}
	input[type='file'] {
		display: none;
	}

	textarea {
		resize: none;
		background: none;
	}

	textarea:focus,
	input:focus {
		outline: none;
	}

	.file-upload,
	.file-uploaded {
		width: 272px;
		border: 0.5px solid var(--color-story);
		border-radius: 16px;
		display: flex;
		padding: 6px 12px;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: var(--color-story-transparent);
		transition: 0.1s;
	}
	.file-upload:hover {
		background: var(--tertiary-color);
		transition: 0.1s;
	}
	.file-uploaded {
		background: var(--color-story-light);
		color: #fff;
	}
</style>
