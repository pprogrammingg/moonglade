<script lang="ts">
    import {type Person } from '$lib/types/Perosn';
    import catImage from '$lib/images/cat1.webp';

    export let person: Person;
</script>

<div class="card">
    <img src={catImage} alt={person.name}>

    <div class="card-content">
        <div class="title">
            <div>{person.name}</div>
            <div>{person.age} years</div>
        </div>

        <div class="bio">{person.bio}</div>
    </div>
</div>

<style>
    .card {
      background-color: var(--bg-tertiary);
      border-radius: var(--radius-primary);
      display: flex;
      gap: 1rem;
      flex-direction: column;
      font-size: 0.63rem;
      color: var(--text-color-primary);
    }
  
    img {
      aspect-ratio: 1 / 1;
      max-width:100%;
      object-fit: cover;
      border-radius: var(--radius-primary);
    }

    .card-content {
      padding: var(--padding-primary);
      display: flex;
      flex-direction: column;
      gap: 0.24rem; 
    }

    .title {
      border: 1px solid rgb(16, 255, 199); 
      display: flex;
      justify-content: start;
      gap: 10px;
      padding: var(--padding-secondary);
    }
  
    .bio {
      border: 1px solid rgb(16, 255, 199); 
      padding: var(--padding-secondary);
    }
  </style>