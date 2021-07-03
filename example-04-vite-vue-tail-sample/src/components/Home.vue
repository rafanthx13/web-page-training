<template>
	<div>
		<h1 class="mb-6 text-3xl font-extrabold">Home</h1>
		<p>Name in store: {{ name }}</p>
		<input v-model="newName" type="text" class="p-2 mr-4 border border-gray-600 rounded" />
		<button @click="saveName" class="p-2 text-white bg-indigo-600 rounded">Submit</button>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const name = computed(() => {
	return store.state.user.name
})
const router = useRouter()
const newName = ref('')
function saveName(){
	store.dispatch('saveName', newName)
	newName.value = ''
	router.push('/about')
}
</script>

<style scoped>

</style>
