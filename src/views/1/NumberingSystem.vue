<template>
    <div class="question">
        <h1>Numbering Systems Practice</h1>

        <div class="label">From bases: </div>
        <el-input placeholder="From bases" v-model="fromBases"></el-input>

        <div class="label">To bases: </div>
        <el-input placeholder="To bases" v-model="toBases"></el-input>

        <div class="label">Question: </div>
        <div class="question-text">{{question}}</div>

    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {randInt} from "@/scripts/utils";

export default class NumberingSystem extends Vue
{
    question = "";

    fromBases = "2, 8, 10, 16";
    toBases = "2, 8, 10, 16";

}
</script>
