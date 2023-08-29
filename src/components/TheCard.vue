<script>
import { store } from '/store.js';

export default {
    data() {
        return {
            active: [],
            store,
        }
    },
    methods: {
    // metodo per visualizzare bandiere in base alla lingua
    displayLanguage(language) {
        if (language === 'en') {
        return '<img class="flag" src="https://flagcdn.com/w40/gb.png" alt="uk-flag" />';
        }
        else if (language === 'it') {
        return '<img class="flag" src="https://flagcdn.com/w40/it.png" alt="it-flag" />';
        }
        else if (language === 'de') {
        return '<img class="flag" src="https://flagcdn.com/w40/de.png" alt="de-flag" />';
        }
        else if (language === 'fr') {
        return '<img class="flag" src="https://flagcdn.com/w40/fr.png" alt="fr-flag" />';
        }
        else if (language === 'es') {
        return '<img class="flag" src="https://flagcdn.com/w40/es.png" alt="es-flag" />';
        }
        else if (language === 'pt') {
        return '<img class="flag" src="https://flagcdn.com/w40/pt.png" alt="pt-flag" />';
        }
        else if (language === 'ru') {
        return '<img class="flag" src="https://flagcdn.com/w40/ru.png" alt="ru-flag" />';
        }
        else if (language === 'uk') {
        return '<img class="flag" src="https://flagcdn.com/w40/ua.png" alt="ua-flag" />';
        }
        else if (language === 'pl') {
        return '<img class="flag" src="https://flagcdn.com/w40/pl.png" alt="pl-flag" />';
        }
        else if (language === 'ja') {
        return '<img class="flag" src="https://flagcdn.com/w40/jp.png" alt="jp-flag" />';
        }
        else if (language === 'cn') {
        return '<img class="flag" src="https://flagcdn.com/w40/cn.png" alt="cn-flag" />';
        }
        else if (language === 'ko') {
        return '<img class="flag" src="https://flagcdn.com/w40/kr.png" alt="kr-flag" />';
        }
        else {
            return language;
        }
    },
    rating(voteAverage) {
            let vote = Math.round(voteAverage / 2);
            return vote;
        }
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center flex-wrap gap-3 my-5">
        <div class="card" v-for="movie in store.moviesList" :key="movie.id" @mouseover="active[movie.id] = true"
            @mouseout="active[movie.id] = false">

            <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : 'not-found.jpg'"
                :alt="movie.title">
            <div class="details" v-show="active[movie.id]">
                <h4>{{ movie.title }}</h4>
                <h4 v-if="movie.title != movie.original_title">Titolo originale: {{ movie.original_title }}</h4>

                <h5 :innerHTML="displayLanguage(movie.original_language)"></h5>

                <div class="rating">
                    Voto:
                    <!-- stampa stelle in base alla votazione -->
                    <span v-for="star in rating(movie.vote_average)">&#9733;</span>
                    <!-- stampa le rimanenti stelle vuote, facendo la differenza tra un intervallo di 5 numeri meno il voto arrotondato del metodo-->
                    <span v-for="star in 5 - rating(movie.vote_average)">&#9734;</span>
                    <h6 class="fw-medium">{{ movie.overview }}</h6>
                </div>
            </div>
        </div>
        <!-- array delle serie tv -->
        <div class="card" v-for="tv in store.tvList" :key="tv.id" @mouseover="active[tv.id] = true"
            @mouseout="active[tv.id] = false">
            <!-- immagine -->
            <img :src="tv.poster_path ? `https://image.tmdb.org/t/p/w342${tv.poster_path}` : 'not-found.jpg'" :alt="tv.name">
            <!-- titolo -->
            <div class="details" v-show="active[tv.id]">
                <!-- titolo -->
                <h4>Titolo: {{ tv.name }}</h4>

                <!-- mostra titolo originale se diverso da titolo -->
                <h4 v-if="tv.name != tv.original_name">Titolo originale: {{ tv.original_name }}</h4>

                <!-- condizione per bandiera o stringa lingua -->
                <h5 :innerHTML="displayLanguage(tv.original_language)">
                </h5>

                <!-- votazione serie -->
                <div class="rating">
                    Voto:
                    <span v-for="star in rating(tv.vote_average)">&#9733;</span>
                    <span v-for="star in 5 - rating(tv.vote_average)">&#9734;</span>
                </div>

                <h6 class="fw-medium">{{ tv.overview }}</h6>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

.container {
    margin-top: 50px;

    .card {
        cursor: pointer;
        position: relative;
        color: $text;

        img {
            max-height: 450px;
            max-width: 342px;
            object-fit: cover;
            text-align: center;
        }

        .details {
            padding: 10px;
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.563);
            color: $black;
            overflow-y: auto;
            text-align: center;

            h4,
            .rating {
                font-size: 1.30rem;
                margin-bottom: 20px;
                text-align: center;
                color: $text;
            }

            span {
                color: $yellow;
            }

            h6 {
                font-size: 1.20rem;
                font-weight: 100;
                text-align: center;
                color: $text;
            }
        }
    }

    h3 {
        color: $yellow;
    }
}
</style>

