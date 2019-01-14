<template>
    <div id="app">

        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "app"
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 5px;
    }

    #header {
        background-color: #48a5ef;
        color: white;
        text-align: center;
        padding: 5px;
    }

    #nav {
        line-height: 30px;
        background-color: #dde8f1;
        height: 450px;
        width: 180px;
        float: left;
        padding: 5px;
    }

    #section {
        text-align: left;
        width: 900px;
        float: left;
        padding: 20px;
    }

    #footer {
        background-color: #48a5ef;
        color: white;
        clear: both;
        text-align: center;
        padding: 10px;
    }

    #nav h3 {
        margin: 10px 0 0;
    }

    ul {
        line-height: 10px;
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 15px 10px !important;
    }

    a {
        color: #42b983;
    }
</style>