<script setup>
// importar componentes de vue
import { computed, ref, watch } from 'vue';

// importar iconos
import SocialIcons from '@/components/sistem/SocialIcons.vue'

// helper de precio
import { formatCurrency } from '@/helpers/price'

const props = defineProps({
    product: { type: Object, required: true },
    showModal: { type: Boolean, required: true }
    // addToListButton: {type: Number},
})

const showModal = ref(props.showModal)

</script>

<template :class="{'h-screen' : showModal}">
                    <!-- boton modal del producto -->
                    <button @click="showModal = true" class="bg-primary-700 text-white font-bold border-2 border-primary-900 rounded-2xl px-3 py-1">
                        Ver más detalles
                    </button>
                    <!-- Modal del producto -->
                    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-80 p-2">
                    <!-- Fondo del modal cubriendo toda la pantalla -->
                    <div class="absolute inset-0 bg-gray-800 bg-opacity-80"></div>

                    <!-- Contenido del modal centrado -->
                    <div class="relative bg-white rounded-lg shadow-lg max-w-2xl h-full w-full p-5 z-10">
                        <div class="flex justify-between items-center">
                        <h2 class="text-xl font-bold">{{ product.name }}</h2>
                        <button @click="showModal = false" class="text-primary-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                        </div>

                        <p><strong>Descripción:</strong> {{ product.description }}</p>
                        <p><strong>Precio:</strong> ${{ product.price }}</p>
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
</style>