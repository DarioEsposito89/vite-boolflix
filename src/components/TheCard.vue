<script>
export default {
    props: {
        srcImg: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            default: "NO NAME"
        },
        archetype: {
            type: String,
            required: true,
            default: "NO ARCHETYPE"
        }
    }
}
</script>

<template>
    <div class="card p-0">

        <img :src="srcImg">

        <div class="card-info d-flex flex-column text-center">
            <span class="name text-white text-uppercase fw-bold">{{ name }}</span>
            <span class="archetype fw-bold">{{ archetype }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.card {
    background-color: $bg-main;

    img {
        max-width: 100%;
    }
}
</style>