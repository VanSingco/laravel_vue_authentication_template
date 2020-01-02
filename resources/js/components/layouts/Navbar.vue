<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light shadow-sm">
        <div class="container">
            <router-link class="nav-link" to="/">
                Authentication
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto align-items-center">
                    <!-- Authentication Links -->
                    <template v-if="!isAuthenticated">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/register">Register</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item ml-3 mr-3">
                            <router-link class="nav-link" to="/home">Home</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <!-- <img :src="auth.profile.avatar" alt="" class="profile-nav"> -->
                                {{ user ? user.name : 'account' }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" @click.prevent="logout">
                                    Logout
                                </a>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('logout');
        }
    },
    computed: {
        isAuthenticated(){
            return this.$store.getters.isAuthenticated;
        },

        user(){
            return this.$store.getters.authUser
        },

    },
    created(){
       this.$store.dispatch('fetchAuthUser');
    }
}
</script>

<style scoped>

</style>