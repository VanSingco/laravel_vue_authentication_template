<template>
    <div>
        <navbar></navbar>
       <div class="container">
           <div class="row justify-content-center">
               <div class="mt-5">
                   <h1>Laravel vue Authentication</h1>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
import NavbarVue from '../layouts/Navbar.vue';
export default {
    components:{
        Navbar:NavbarVue
    }
}
</script>