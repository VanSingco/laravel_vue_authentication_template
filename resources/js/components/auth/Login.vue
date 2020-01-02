<template>
    <div>
        <navbar></navbar>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-5">
                    <div class="mt-5 mb-5 text-center">
                        <h2>Login</h2>
                    </div>
                    <form method="post" class="mt-5" @submit.prevent="onSubmit">
                        <div class="form-group">
                            <input type="email" v-model="email" placeholder="Email" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" placeholder="Password" class="form-control">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavbarVue from '../layouts/Navbar.vue';
export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit(){
            const data = {
                client_id: 2,
                client_secret: 'A5o0iBMZ3Kxjvqh0r6bM5dDeQNc9FtjWuEXCw1um',
                grant_type: 'password',
                username: this.email,
                password: this.password
            }

            this.$store.dispatch('login', data);
            this.email = '';
            this.password = '';
            
        }
    },
    components: {
        Navbar: NavbarVue
    },
}
</script>