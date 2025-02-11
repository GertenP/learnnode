<script setup>

import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let i = 1;
let message = ref('');
let items = ref([{ id: i++, name: 'Piim', isDone: false },
{ id: i++, name: 'Laua viin', isDone: false },
{ id: i++, name: 'Õlu', isDone: false },
{ id: i++, name: 'Bock', isDone: true },
{ id: i++, name: 'Sipsid', isDone: false }]);

function addItem() {
    if (message.value.trim() !== '') {
        items.value.push({ id: i++, name: message.value.trim(), isDone: false });
    }
    message.value = '';
}


let doneItems = computed(() => items.value.filter(i => i.isDone))
let toDoItems = computed(() => items.value.filter(i => !i.isDone))

</script>

<template>
    <div class="container mt-2">
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" v-model="message" @keypress.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Search
                </button>
            </div>

            <div class="content">
            <ItemList :items="items" title="All Items"></ItemList>
            <ItemList :items="doneItems" title="Done Items"></ItemList>
            <ItemList :items="toDoItems" title="ToDo Items"></ItemList>

            </div>
        </div>
    </div>
</template>

<style></style>