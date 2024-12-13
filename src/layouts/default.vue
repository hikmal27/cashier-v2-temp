<template>
    <v-app>
        <v-navigation-drawer
            border="0"
            width="70"
            class="py-5"
        >
            <section class="flex justify-center">
                <VsxIcon iconName="ShoppingBag" color="black" size="30" type="linear" />
            </section>
            <v-divider></v-divider>
            <section class="h-[90%] mt-5 flex flex-col justify-between">
                <div class="space-y-5">
                    <v-list-item link class="mt-10">
                        <v-list-item-icon>
                            <VsxIcon iconName="Home" color="grey" size="30" type="linear" class="mx-auto" />
                        </v-list-item-icon>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <VsxIcon iconName="Category" color="grey" size="30" type="linear" class="mx-auto" />
                        </v-list-item-icon>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <VsxIcon iconName="ChartSquare" color="grey" size="30" type="linear" class="mx-auto" />
                        </v-list-item-icon>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <VsxIcon iconName="Setting2" color="grey" size="30" type="linear" class="mx-auto" />
                        </v-list-item-icon>
                    </v-list-item>
                </div>
                <div>
                    <v-list-item link>
                        <v-list-item-icon>
                            <VsxIcon iconName="Logout" color="grey" size="30" type="linear" class="mx-auto" />
                        </v-list-item-icon>
                    </v-list-item>
                </div>
            </section>
        </v-navigation-drawer>
        <v-main class="bg-gray-100">
            <router-view />
        </v-main>

        <!-- <AppFooter /> -->
    </v-app>
</template>

<script setup>
//
</script>
