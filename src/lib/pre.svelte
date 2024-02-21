<script lang="ts">
    export let name: string
    export let value: any
</script>

<section>
    <h4>{name}</h4>

    <pre> 
        {JSON.stringify(value, null, 2)}
    </pre>
</section>

<style>
    section {
        margin-block: 2rem ;
        padding: 0.5rem;
        color: rgb(231, 231, 231);
        background-color: rgb(70, 70, 70);
        border-radius: 0.5rem;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);;
    }
</style>