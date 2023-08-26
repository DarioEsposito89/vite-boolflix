<script>
import axios from 'axios';
import TheFilters from './TheFilters.vue';
import TheCard from './TheCard.vue';
import store from '/store';

export default {

    components: {
        TheFilters,
        TheCard,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        getCardsFromServer() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then((res) => {
                    this.store.cards = res.data.data;
                    
                })
        },

        // Funzione che esegue chiamata al Server con Parametri da componente Filters (Figlio)
        filterByParam() {
            

            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {
                params: {
                    num: 20,
                    offset: 0,
                    fname: store.filterName,
                    type: store.filterType,
                    race: store.filterRaceMonster,
                }
            })
                .then((res) => {
                    this.store.cards = res.data.data;
                })

                // Con Type='' ho un Errore del Server che intercetto con ".catch" quindi effettuo chiamata solo con paramentro Fname
                .catch(() => {
                    axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {

                    params: {
                        num: 20,
                        offset: 0,
                        fname: store.filterName,
                    }
                })
                .then((res) => {
                    this.store.cards = res.data.data;
                })
            })
        }
    },

    mounted() {
        this.getCardsFromServer();
    }

}
</script>

<template>
    <main>
        <!-- Ascolto Evento Personalizzato "searchName" e "searchType" (in Figlio) e reagisco con Funzione "filterByName"  -->
        <TheFilters @searchName="filterByParam()" @searchType="filterByParam()" @searchRaceMonster="filterByParam()"/>

        <div class="container bg-white p-4">
            <div class="row row-cols-2 row-cols-lg-6 gap-4 d-flex justify-content-center">
                <TheCard v-for="card in store.cards" :key="card.id" :srcImg="card.card_images[0].image_url" :name="card.name"
                :archetype="card.archetype" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
    padding: 30px 0;
    background-color: $bg-main;
}

</style>