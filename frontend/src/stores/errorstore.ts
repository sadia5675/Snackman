import { defineStore } from 'pinia';
import { ref } from 'vue'
import { useToast } from 'vue-toastification';


// Store für Toast und Errormessage, damit Fehlermeldungen aus dem Backend zentralisiert werden und in jeder notwendigen 
// Komponente ausgegebeen werden können. Composition API zum empfangen der Fehlermeldungen fehlt noch
export const useErrorStore = defineStore('globalerror', () => {

    const toast = useToast();

    const globalErrorMessage = ref('');


    return {
        toast,
        globalErrorMessage
    }
})