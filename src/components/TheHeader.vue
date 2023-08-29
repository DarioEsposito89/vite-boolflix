<script>
import { store } from '/store.js';
export default {
    name: 'TheHeader',

    components: {
        
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="container h-100 p-2 d-flex align-items-center justify-content-evenly">
            <h1 class="mx-3">BOOLFLIX</h1>
            <div class="col-6"></div>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Cerca quello che vuoi qui" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="store.searchText">
                    <button class="btn btn-outline-secondary" type="sumbit" id="button-addon2" @click.prevent="$emit('search')">
                        Search
                    </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
Header {
    background-color: $black
}
    h1 {
    color: $title;
    }
        button {
        background-color: white;
        color: black;
    }
</style>
