import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createYmaps } from 'vue-yandex-maps'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
const ymapkey = import.meta.env.VITE_YMAPKEY;

app.use(createPinia())
if(ymapkey) {
	app.use(createYmaps({
		apikey: ymapkey, // API mail - c0mix70ne@yandex.ru
	}));
	
	throw new Error("Yandex map ApiKey is not exist")
}

app.use(router)

// Dynamic titles
router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title as string
    } else {
        document.title = 'Baobei' // Default
    }
})

app.mount('#app')
