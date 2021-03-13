<template>
    <Loader v-if="!statusLoader" />
    <div v-else>
        12
    </div>
</template>

<script>
    import Loader from "../../components/basic/Loader";
    import axios from 'axios'
    export default {
        name: "Show",
        components:{
            Loader
        },
        data: () => ({
            user: null,
            statusLoader: false,
        }),
        mounted() {
            axios.post('http://localhost:3000/users/',
                {
                    id: this.$route.params.id,
                })
                .then(res => {
                    this.user = res.data;
                    this.statusLoader = true;
                })
                .catch(error => {
                    console.log(error, 'error')
                })
        }
    }
</script>
