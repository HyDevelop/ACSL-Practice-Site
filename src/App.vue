<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/problem/0">Numbering Systems</router-link>
        |
        <router-link to="/about">About</router-link>
    </div>
    <router-view/>
</template>

<style lang="scss">
#app
{
    max-width: 500px;
    margin: auto;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

    h1
    {
        text-align: center;
        margin-bottom: 10px;
    }

    .subtitle
    {
        text-align: center;
        color: #ff79ad;
        margin-bottom: 21px;
        a
        {
            color: inherit;
        }
    }
}

#nav
{
    padding: 30px;

    a
    {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active
        {
            color: #42b983;
        }
    }
}
</style>
