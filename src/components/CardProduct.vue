<template>
    <div
        class="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white"
    >
        <a
            class="relative mx-3 mt-3 flex h-24 overflow-hidden rounded-xl"
            href="#"
        >
            <img
                class="object-cover mx-auto"
                :src="image"
                alt="product image"
            />
            <span
                class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"
                >39% OFF</span
            >
        </a>
        <div class="mt-4 px-5 pb-5">
            <a href="#">
                <p class="text-sm tracking-tight text-slate-900 line-clamp-2">
                    {{ title }}
                </p>
            </a>
            <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span class="text-xl font-bold text-slate-900">${{ price }}</span>
                    <span class="text-sm text-slate-900 line-through"
                        >$699</span
                    >
                </p>
            </div>
            <v-btn @click="clickAdd(data)" variant="flat" size="small" class="text-none bg-black w-full" density="comfortable">Add</v-btn>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    price: Number,
    image: String,
    data: Object
})

const emit = defineEmits(['addProduct'])

// methods
const clickAdd = (data) => {
    emit('addProduct', data)
}
</script>
