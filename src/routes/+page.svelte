<script lang="ts">
	import { onMount } from "svelte"
	import PersonCard from "../components/PersonCard.svelte";
	import { peopleStore, loadNewPeople} from "../state/people";

	let loadingRef: HTMLElement | undefined;

	let sentRequest = false;

	onMount(() => {
		if (!loadingRef) {
			return;
		}

		const loadingObserver = new IntersectionObserver((entries) => {
			const element = entries[0];

			console.log(element.isIntersecting);

			if (element.isIntersecting) {
				loadNewPeople();
			}
		});

		loadingObserver.observe(loadingRef);
	});
</script>

<svelte:head>
	<title>Trade</title>
	<meta name="description" content="NFT Trading Page" />
</svelte:head>

<section id="hero">
	<div>
		Hero
	</div>
</section>

<section class="collection">
	<div class="items">
		{#each $peopleStore as person}
			<PersonCard {person} />
		{/each}
	</div>

	<div class="loading-indicator" bind:this={loadingRef}>Loading...</div>
</section>


<style>
	.collection {
	  display: flex;
	  flex-direction: column;
	  border: 1px solid rgb(202, 81, 226);
	  margin-top: 1rem;
	  background-color: rgb(255, 250, 250);
	  overflow-x: hidden;
	}

	.items {
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
	  gap: 0.5rem;
	} 

	.loading-indicator {
	  padding: var(--padding-primary);
	  font-size: var(--font-size-primary);
	  background-color: rgb(31, 235, 126);

	}
  
	/* @media (max-width: 580px){
		.items {
			grid-template-columns: repeat(1, auto);
		}
	}

	@media (min-width: 581px){
		.items {
			grid-template-columns: repeat(2, auto);
		}
	}

	@media (min-width: 1000px) {
		.items {
			grid-template-columns: repeat(7, 1fr); 
		}
	}  */
  </style>
