declare module 'vue' {
    export interface GlobalComponents {
        'CardProduct': typeof import('./src/components/CardProduct.vue')['default']
    }
}
