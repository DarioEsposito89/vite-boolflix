<script>
import store from '/store';

export default {
    data() {
        return {
            types: ["Effect Monster",
                "Flip Effect Monster",
                "Flip Tuner Effect Monster",
                "Gemini Monster",
                "Normal Monster",
                "Normal Tuner Monster",
                "Pendulum Effect Monster",
                "Pendulum Effect Ritual Monster",
                "Pendulum Flip Effect Monster",
                "Pendulum Normal Monster",
                "Pendulum Tuner Effect Monster",
                "Ritual Effect Monster",
                "Ritual Monster",
                "Spell Card",
                "Spirit Monster",
                "Toon Monster",
                "Trap Card",
                "Tuner Monster",
                "Union Effect Monster",
                "Fusion Monster",
                "Link Monster",
                "Pendulum Effect Fusion Monster",
                "Synchro Monster",
                "Synchro Pendulum Effect Monster",
                "Synchro Tuner Monster",
                "XYZ Monster",
                "XYZ Pendulum Effect Monster",
                "Skill Card",
                "Token"],
            races: [
                "Aqua",
                "Beast",
                "Beast-Warrior",
                "Creator-God",
                "Cyberse",
                "Dinosaur",
                "Divine-Beast",
                "Dragon",
                "Fairy",
                "Fiend",
                "Fish",
                "Insect",
                "Machine",
                "Plant",
                "Psychic",
                "Pyro",
                "Reptile",
                "Rock",
                "Sea Serpent",
                "Spellcaster",
                "Thunder",
                "Warrior",
                "Winged Beast",
                "Wyrm",
                "Zombie"],
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <!-- Con $emit creo Evento Personalizzato per ascoltare Evento "keyup.enter" -->
        <input type="text" placeholder="Filtra per Nome" v-model="store.filterName" @keyup.enter='$emit("searchName")'>

        <!-- Con $emit creo Evento Personalizzato per ascoltare Evento "change" -->
        <div class="my-2">
            <select id="" v-model="store.filterType" @change="$emit('searchType')">
                <option value="">Nessun Tipo di Carta</option>
                <option v-for="(type, i) in types" :key="i" :value="type"> {{ type.toUpperCase() }} </option>
            </select>
        </div>
        
        <div class="my-2">
            <select id="" v-model="store.filterRaceMonster" @change="$emit('searchRaceMonster')">
                <option value="">Nessuna Razza</option>
                <option v-for="(race, i) in races" :key="i" :value="race"> {{ race.toUpperCase() }} </option>
            </select>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 30px 0;
    gap: 20px;
}
</style>