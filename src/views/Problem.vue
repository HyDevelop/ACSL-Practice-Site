<template>
    <div class="problem">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';

export default class Problem extends Vue
{

}
</script>

<style lang="scss">
.label
{
    margin-top: 20px;
    margin-bottom: 5px;
    color: dimgray;
}
</style>
