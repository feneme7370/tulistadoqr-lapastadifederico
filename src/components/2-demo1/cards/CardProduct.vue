<script setup>
    // importar componentes de vue
    import { computed, ref } from 'vue';

    // importar lightbox
    import ImgTumbLightbox from '@/components/sistem/ImgTumbLightbox.vue'
    import ImgLightbox from '@/components/sistem/ImgLightbox.vue'
    
    // helper de moneda y uri
    import { formatCurrency } from '@/helpers/price'
    import { urlBack, urlFront } from '@/helpers/config'

    // carrito
    import { useListStore } from '@/stores/list';
    
    // modal
    import SeeModalProduct from '@/components/2-demo1/cards/SeeModalProduct.vue'

    
    const apiList = useListStore()

    const props = defineProps({
        product: {type: Object, required: true},
        addToListButton: {type: Number},
    })

    const showModal = ref(false)
</script>

<template class="">
   
    <div class="my-2 px-2 card-product" :class="{'min-h-screen' : showModal}">
        
        <hr class="t_border-hr-card">

        <div class="card__product">

            <div 
                class="card__product-descriptions" 
                :class="product.image_hero != '' ? 'w-8/12': 'w-11/12'"
            >

                <div>
                    <p class="card__product-descriptions-name">{{ product.name }}</p>
                    <div class="line-clamp-2">
                        <p class="card__product-descriptions-description">
                            {{ product.description }} 
                            <br>{{ product.description2 }} 
                            <br> {{ product.description3 }} 
                        </p>
                    </div>
                </div>

                <div class="card__product-descriptions-tags">

                        <span v-for="tag in product.tags" class="card__product-descriptions-tag">{{ tag.name }}</span>

                </div>

                <div class="t_card__product-descriptions-prices">
                    <div v-if="product.price_original < product.price_seller || product.price_seller == '' || product.price_seller == '0'">
                        <p class="t_card__product-descriptions-price-green">{{ formatCurrency(product.price_original)}}</p>
                    </div>
                    <div v-else>
                        <span class="mr-2 t_card__product-descriptions-price-green">{{ formatCurrency(product.price_seller)}}</span>
                        <span class="t_card__product-descriptions-price-red">{{ formatCurrency(product.price_original)}}</span>
                    </div>
                    <div v-if="addToListButton">
                        <button class="t_card__product-descriptions-add" @click="apiList.addToList(product)">Agregar</button>
                    </div>

                    
                </div>



            </div>

            <div class="flex flex-col items-center w-4/12 gap-1">

                <ImgTumbLightbox 
                    v-if="product.image_hero != ''"
                    class=" card__product-img"
                    :uri="urlBack()+product.image_hero_uri"
                    :name="product.image_hero"
                    :nameImg="product.category + ' - ' + product.name"
                    nameAlbum="productos"
                />

                <!-- modal de producto -->
                <div class="">
                    <!-- boton modal del producto -->
                    <button @click="showModal = true" class="bg-primary-200 text-sm text-white font-bold border-2 border-primary-300 rounded-2xl px-2 p-1">
                        Ver mas
                    </button>

                    <!-- Modal del producto -->
                    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-80 p-2 h-auto">
                    <!-- Fondo del modal cubriendo toda la pantalla -->
                    <div class="absolute inset-0 bg-primary-200 bg-opacity-80"></div>

                        <!-- Contenido del modal centrado -->
                        <div class="relative bg-white rounded-lg shadow-lg max-w-2xl h-full w-full p-5 z-10 overflow-auto">
                            
                            <div class="flex justify-between items-center">
                                <h2 class="text-lg font-bold">{{ product.name }}</h2>
                                <button @click="showModal = false" class="text-primary-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                </button>
                            </div>

                            <!-- Detalle de producto en modal -->

                            <hr class="border-primary-300 my-3 w-10/12 mx-auto">

                            <div>
                                <div class="card__product-descriptions-tags">
                                    <span v-for="tag in product.tags" class="card__product-descriptions-tag">{{ tag.name }}</span>
                                </div>

                                <div class="t_card__product-descriptions-prices">
                                    <div v-if="product.price_original < product.price_seller || product.price_seller == '' || product.price_seller == '0'">
                                        <p class="t_card__product-descriptions-price-green text-2xl">{{ formatCurrency(product.price_original)}}</p>
                                    </div>
                                    <div v-else>
                                        <span class="mr-2 t_card__product-descriptions-price-green">{{ formatCurrency(product.price_seller)}}</span>
                                        <span class="t_card__product-descriptions-price-red">{{ formatCurrency(product.price_original)}}</span>
                                    </div>
                                    <div v-if="addToListButton">
                                        <button class="t_card__product-descriptions-add" @click="apiList.addToList(product)">Agregar</button>
                                    </div>

                                    
                                </div>

                                
                            </div>
                            
                            <div class="flex flex-col justify-between h-auto">
                                <ImgLightbox 
                                    v-if="product.image_hero != ''"
                                    class="w-full h-full"
                                    :uri="urlBack()+product.image_hero_uri"
                                    :name="product.image_hero"
                                    :nameImg="product.category + ' - ' + product.name"
                                    nameAlbum="productos"
                                />
                                <div class="mt-1 min-h-min">
                                    <hr class="border-primary-300 my-3 w-10/12 mx-auto">
                                    <p class="card__product-descriptions-name mb-3">{{ product.name }}</p>
                                    <p class="card__product-descriptions-description-without-line">{{ product.description }}</p>
                                    <p class="card__product-descriptions-description-without-line">{{ product.description2 }}</p>
                                    <p class="card__product-descriptions-description-without-line">{{ product.description3 }}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>


</template>

<style scoped>

/* Asegura que el modal cubra toda la pantalla */
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.8);
}

.card-product {
  /* Asegura un espacio adecuado alrededor de los productos */
  margin-bottom: 20px;
}

    .card__product{
        @apply flex justify-center gap-1 my-2 text-gray-700 min-h-28;
    }
    .card__product-descriptions{
        @apply py-1 px-2 flex flex-col justify-between;
    }
    .card__product-descriptions-name{
        @apply text-gray-800 text-sm font-bold;
    }
    .card__product-descriptions-description{
        @apply mb-1 font-light text-sm line-clamp-2;
    }
    .card__product-descriptions-description-without-line{
        @apply mb-1 font-light text-sm;
    }
    .card__product-descriptions-tags{
        @apply my-1 flex items-center gap-1 overflow-x-auto overflow-hidden;
    }
    .card__product-descriptions-tag{
        @apply block whitespace-nowrap  bg-primary-200 text-primary-800 text-xs font-medium my-2 me-2 px-2.5 py-0.5 rounded;
    }

    .card__product-img{
        @apply max-w-32 max-h-32 rounded-sm overflow-hidden;
    }
</style>