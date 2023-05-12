// Login.vue

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/main';

const authStore = useAuthStore();
const { authUser } = storeToRefs(authStore);

const username = ref('');
const password = ref('');

const login = () => {
    if (!username.value || !password.value) {
        alert('Lütfen gerekli alanları doldurunuz');
        return;
    }
    console.log(username.value, password.value);
    authStore.login(username.value, password.value);
};

onMounted(() => {
    const email = JSON.parse(localStorage.getItem('email'));
    const password = JSON.parse(localStorage.getItem('password'));

    if (email && password) {
        authStore.updateAuthUser({ email, password });
    }
});
</script>
