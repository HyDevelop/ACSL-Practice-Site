<template>
    <div class="question">
        <h1>Numbering Systems Practice</h1>

        <div class="label">From bases: </div>
        <el-input placeholder="From bases" v-model="fromBases"></el-input>

        <div class="label">To bases: </div>
        <el-input placeholder="To bases" v-model="toBases"></el-input>

        <el-button style="margin-top: 20px;" type="primary" plain @click="newQuestion">New Question</el-button>

        <div class="label">Question: </div>
        <div class="question-text">{{question}}</div>

        <div class="label">Your answer: </div>
        <el-input placeholder="Answer" v-model="answer" :change="checkAns"></el-input>

        <el-button style="margin-top: 20px;" type="primary" plain @click="checkAns">Check Answer</el-button>

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

    n: number;
    fromText: string;
    toText: string;

    answer = '';

    revealAns = false;

    mounted()
    {
        this.newQuestion();
    }

    newQuestion()
    {
        // Generate target number
        this.n = randInt(0, 512)

        const fb = this.fromBases.split(',').map(it => +it);
        const tb = this.toBases.split(',').map(it => +it);
        const from = fb[Math.floor(Math.random() * fb.length)]
        const to = tb[Math.floor(Math.random() * tb.length)]

        this.fromText = this.n.toString(from).toUpperCase()
        this.toText = this.n.toString(to).toUpperCase()

        this.question = `Can you convert base-${from} number "${this.fromText}" to base-${to}?`
        this.revealAns = false;
    }

    checkAns()
    {
        if (this.answer.trim().toUpperCase() == this.toText.trim())
        {
            this.$message({message: 'Yay! Correct!', type: 'success'});
        }
        else
        {
            this.$message.error('Nope');
        }
    }
}
</script>
