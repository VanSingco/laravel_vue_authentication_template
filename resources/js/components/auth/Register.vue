<template>
    <div>
        <navbar></navbar>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-5">
                    <div class="mt-5 mb-5 text-center">
                        <h2>Register</h2>
                    </div>
                    <form method="post" class="mt-5" @submit.prevent="onSubmit">
                         <div class="form-group">
                            <input type="text" v-model="name" placeholder="Name" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="email" placeholder="Email" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" placeholder="Password" class="form-control">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
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
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('register', {name: this.name, email: this.email, password: this.password});
            this.name = '';
            this.email = '';
            this.password = '';
        }
    },
    components: {
        Navbar: NavbarVue
    },
}
</script>