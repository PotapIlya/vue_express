<template>
    <ul style="display: flex">
        <li style="margin-right: 20px;">
            <router-link to="/">
                Home
            </router-link>
        </li>
        <li style="margin-right: 20px;">
            <router-link to="/users">
                Users
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>
