<template>
    <Loader v-if="!statusLoader" />
    <div v-else>
        <h3 v-if="user !== null">
            {{ user.name }}
        </h3>
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
            axios.get('http://localhost:3000/users/'+ this.$route.params.id)
                .then(res => {
                    this.user = res.data[0];
                    this.statusLoader = true;
                })
                .catch(error => {
                    console.log(error, 'error')
                })
        }
    }
</script>
