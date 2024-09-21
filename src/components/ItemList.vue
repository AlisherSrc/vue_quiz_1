<template>
    <div>
        <h2>Why do you want to do?</h2>
        <div class="input_item_container">
            <input v-model="newItem" placeholder="Add a new item" />
            <button @click="addItem">Add Item</button>
        </div>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
                <button @click="removeItem(index)">Remove</button>
            </li>
        </ul>

        <MainCounter :initialNum="items.length" />
    </div>
</template>

<script>
import MainCounter from './MainCounter.vue';

export default {
    components: {
        MainCounter
    },
    props: {
        initialItems: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            newItem: '',
            items: [...this.initialItems],
        };
    },
    methods: {
        addItem() {
            if (this.newItem) {
                this.items.push(this.newItem);
                this.newItem = '';
            }
        },
        removeItem(index) {
            this.items.splice(index, 1);
        },
    },
};
</script>

<style scoped>
div {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

.input_item_container {
    display: flex;
}

input {
    width: calc(100% - 90px);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #45a049;
}

ul {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
}

li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

li button {
    background-color: #e74c3c;
}

li button:hover {
    background-color: #c0392b;
}
</style>
