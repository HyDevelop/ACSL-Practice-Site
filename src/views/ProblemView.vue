<template>
    <div class="problem">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import Problem from "@/scripts/Problem";

export default class ProblemView extends Vue
{
    prob: Problem
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
