<template>
    <v-layout full-height>
        <section class="grid grid-cols-8 w-full">
            <section class="col-span-6 px-5">
                <div class="py-12 grid grid-cols-2">
                    <div class="space-y-3">
                        <p class="text-2xl font-semibold">Welcome, Hikmal</p>
                        <p class="text-xs">ShopId #088334</p>
                    </div>
                    <div>
                        <v-text-field
                            v-model="search"
                            flat
                            variant="solo"
                            label="Search"
                            density="comfortable"
                            append-inner-icon="SearchNormal"
                            single-line
                            hide-details
                            rounded="lg"
                            @input="onChange"
                        >
                            <template #prepend-inner>
                                <VsxIcon iconName="SearchNormal" size="20" color="grey" />
                            </template>
                        </v-text-field>
                    </div>
                </div>

                <v-slide-group
                    :show-arrows="true"
                >
                    <v-slide-group-item>
                        <v-btn
                            class="mx-2 text-none"
                            variant="flat"
                            size="default"
                            @click="onClickCategory('all')"
                        >
                            all items
                        </v-btn>
                    </v-slide-group-item>
                    <v-slide-group-item
                        v-for="(c, index) in category"
                        :key="index"
                    >
                        <v-btn
                            class="mx-2 text-none"
                            variant="flat"
                            size="default"
                            @click="onClickCategory(c.name)"
                        >
                            {{ c.name }}
                        </v-btn>
                    </v-slide-group-item>
                </v-slide-group>

                <section class="overflow-auto max-h-[30rem] mt-10">
                    <div class="grid grid-cols-5 gap-5">
                        <template v-for="(product, index) in productsTemp" :key="index">
                            <CardProduct
                                :title="product.title"
                                :price="product.price"
                                :image="product.image"
                                :data="product"
                                @addProduct="addToCart"
                            />
                        </template>
                        <!-- <template v-for="(product, index) in products" :key="index">
                            <v-card
                                flat
                                rounded="lg"
                                class="py-5"
                            >
                                <v-img
                                    :width="100"
                                    :src="product.image"
                                    class="mx-auto"
                                    cover
                                />
                                <v-card-text>
                                    <p class="font-semibold text-md">{{ product.title }}</p>
                                    <p>{{ product.price }}</p>
                                </v-card-text>
                            </v-card>
                        </template> -->
                    </div>
                </section>
            </section>
            <section class="col-span-2 h-full bg-white p-5">
                <p class="text-2xl font-bold text-slate-900">Order Detail</p>
                <hr class="my-5 border-2 border-slate-200 rounded-full">

                <section>
                    <!-- card -->
                    <div class="w-full flex space-x-5">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                            min-width="25%"
                            rounded="lg"
                            cover
                        />
                        <div class="w-9/12">
                            <div>
                                <p class="font-semibold text-sm">Mens Cotton Jacket</p>
                                <p class="text-xs">Size L</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-xl font-bold">$22.3</p>
                                <div class="flex items-center space-x-2">
                                    <v-btn variant="text" icon="mdi-minus-circle-outline" size="small" density="compact" />
                                    <div class="px-3 bg-slate-900 text-white rounded-md">
                                        <p class="text-sm">1</p>
                                    </div>
                                    <v-btn variant="text" icon="mdi-plus-circle-outline" size="small" density="compact" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mt-[24rem]">
                    <div class="mt-10 p-2 bg-gray-200 text-slate-800 rounded-lg">
                        <div class="flex justify-between">
                            <p>Subtotal</p>
                            <p class="font-semibold">$82</p>
                        </div>
                        <div class="flex justify-between">
                            <p>Tax</p>
                            <p class="font-semibold">$1.50</p>
                        </div>
                        <hr class="my-3 border rounded-full">
                        <div class="flex justify-between font-semibold">
                            <p>Total</p>
                            <p>$1.50</p>
                        </div>
                    </div>
                    <!-- <v-btn variant="default" class="w-full mt-5 text-none bg-slate-900 text-white">Pay</v-btn> -->
                    <v-btn class="w-full mt-5 text-none" flat color="#0f172a">Pay</v-btn>
                </section>
            </section>
        </section>
    </v-layout>
</template>

<script setup>
import { api } from '@/api';
import { watch } from 'vue';
import { onMounted, ref } from 'vue';
import { VsxIcon } from 'vue-iconsax';

const categories = [
    { name: 'All Items', href: '#', icon: 'Home' },
    { name: 'Food', href: '#', icon: 'Home' },
    { name: 'Drinks', href: '#', icon: 'Home' },
    { name: 'Coffe', href: '#', icon: 'Home' },
    { name: 'Cocktail', href: '#', icon: 'Home' },
    { name: 'Juice', href: '#', icon: 'Home' },
    { name: 'Others', href: '#', icon: 'Home' },
    { name: 'Juice', href: '#', icon: 'Home' },
    { name: 'Others', href: '#', icon: 'Home' },
    { name: 'Cocktail', href: '#', icon: 'Home' },
    { name: 'Juice', href: '#', icon: 'Home' },
    { name: 'Others', href: '#', icon: 'Home' },
    { name: 'Juice', href: '#', icon: 'Home' },
    { name: 'Others', href: '#', icon: 'Home' },
]

// data
const products = ref([])
const productsTemp = ref([]);
const category = ref([])
const listProductCart = ref([])
const search = ref("");
let debounceTimeout = null;

// methods
const onChange = () => {
    console.log('change')
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
        onSearch();
    }, 2000);
}
const onSearch = () => {
    productsTemp.value = products.value.filter(x => x.title.toLowerCase().includes(search.value.toLowerCase()))
}
const fetchProducts = async () => {
    try {
        const { data: response } = await api.get('/products');
        // console.log("response => ", response);
        if (response) {
            products.value = response;
            productsTemp.value = response;
        }
    } catch (error) {
        console.log("err => ", error);
    }
}
const fetchCategories = async () => {
    try {
        const { data: response } = await api.get('/products/categories');
        if (response) {
            response.map((x, i) => {
                category.value.push({ id: i, name: x })
            })
        }
    } catch (error) {
        console.log("err => ", error);
    }
}

const addToCart = (data) => {
    Object.assign(data, { quantity: 1 })
    listProductCart.value.push(data)
    console.log("data => ", listProductCart.value);
}
const onClickCategory = (category) => {
    const tmp = products.value;
    if (category == 'all') {
        productsTemp.value = tmp;
    } else {
        productsTemp.value = tmp.filter(x => x.category.toLowerCase() === category.toLowerCase())
    }
    // console.log('tmp => ', tmp.filter(x => x.category.toLowerCase() === category.toLowerCase()));
}

// hooks
onMounted( async () => {
    await fetchProducts();
    await fetchCategories();
})
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.v-slide-group__next, .v-slide-group__prev {
    display: none !important;
}
</style>
