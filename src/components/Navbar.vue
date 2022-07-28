<template>
    <div>
        <nav class="navbar navbar-expand-md bg-light navbar-light">
            <div class="container d-flex justify-content-between w-100">
                <div class="navbar-brand navbar_logo w-25">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <button class="navbar-toggler" type="button" style="font-size: 15px;" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" w-75 collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav d-flex justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#our_home" v-smooth-scroll>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about_us" v-smooth-scroll>About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#vue_hooper" v-smooth-scroll>Services</a>
                    </li>    
                    <li class="nav-item">
                        <a class="nav-link" href="#our_services"  v-smooth-scroll>Products</a>
                    </li>   
                </ul>
                </div>
            </div>
        </nav>
        
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
.navbar{
    background-color: white !important;
    padding: 30px 0;
}
.navbar-nav li a{
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    padding: 0 30px !important;   
}
a{
    text-decoration: none;
    color: #1E1F4B !important;
}
a:hover{
    color: #706FE5 !important;
}
.navbar-nav{
    display: flex;
    justify-content: center;
}

.navbar_logo img{
    width: 77px;
    height: 36px;
}
</style>