<template>
    <Loader v-if="!statusLoader" />
    <div v-else>

        <ul v-if="users.length">
            <li v-for="user in users">
                <router-link :to="'users/' + user.id">
                    {{ user.name }}
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    import Loader from "../../components/basic/Loader";
    import axios from 'axios'
    export default {
        name: "Users",
        components:{
            Loader
        },
        data: () => ({
            users: [],
            statusLoader: false,
        }),
        mounted() {
            axios.get('http://localhost:3000/users')
                .then(res => {
                    this.users = res.data;
                    this.statusLoader = true;
                })
                .catch(error => {
                    console.log(error, 'error')
                })
        }
    }
</script>

