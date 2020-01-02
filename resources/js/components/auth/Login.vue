<template>
    <div>
        <navbar></navbar>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-5">
                    <div class="mt-5 mb-5 text-center">
                        <h2>Login</h2>
                    </div>
                    <div class="alert alert-danger alert-dismissible fade show mb-4" role="alert" v-if="error">
                        <strong>Oops!</strong> {{ error }}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = ''">
                            <span aria-hidden="true">&times;</span>
                        </button>
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
            password: '',
            error: ''
        }
    },
    methods: {
        onSubmit(){
            const data = {
                username: this.email,
                password: this.password
            }

            this.$store.dispatch('login', data).then((res) => {
                // console.log(res)
            }).catch((err) => {
                this.error = err;
            });

            this.email = '';
            this.password = '';
            
        }
    },
    components: {
        Navbar: NavbarVue
    },
}
</script>