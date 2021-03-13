<template>
    <div id="app">
        <Nav />
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from './components/basic/Nav'
    export default {
        name: 'admin_panel',
        components:{
            Nav
        }
    }
</script>

