<template>
    <div class="problem">
        <h1>{{ prob.title }}</h1>

        <div class="options" v-for="option in prob.options" :key="option.description">
            <div class="label">{{ option.description }}</div>
            <el-input :placeholder="option.description" v-model="option.value"></el-input>
        </div>
        <el-button style="margin-top: 20px;" plain @click="updateQuestion">New Question</el-button>

        <router-view></router-view>

        <div class="label">Question: </div>
        <div class="question-text">{{ question }}</div>

        <div class="label">Your answer: </div>
        <el-input placeholder="Answer" v-model="answer" :change="checkAns"></el-input>

        <el-button style="margin-top: 20px;" type="primary" plain @click="checkAns">Check Answer</el-button>

        <el-button style="margin-top: 20px;" type="primary" plain @click="reveal">Reveal Answer</el-button>

        <div class="label" v-if="revealAns">Revealed answer: {{ prob.answer }}</div>
    </div>
</template>

<script lang="ts">
import {Vue, prop} from 'vue-class-component';
import Problem from "@/scripts/Problem";
import NumberingSystem from "@/scripts/1/NumberingSystem";
import Recursion from "@/scripts/1/Recursion";

const problems = [new NumberingSystem(), new Recursion()]

class ProblemProps
{
    id = prop<string>({required: true})
}

export default class ProblemView extends Vue.with(ProblemProps)
{
    question = ''
    prob!: Problem

    answer = ''
    revealAns = false

    lastId = -1;
    created() { this.updateQuestion() }
    beforeUpdate() { if (this.lastId != +this.id) this.updateQuestion() }

    updateQuestion()
    {
        const id = +this.id
        this.lastId = id
        if (id >= problems.length) alert("The problem ID in your url doesn't exist 🤔")

        this.prob = problems[id];
        this.prob.newQuestion();
        this.question = this.prob.question

        this.answer = ''
        this.revealAns = false
    }

    checkAns()
    {
        if (this.prob.checkAnswer(this.answer)) alert('Yay! Correct!');
        else alert('Nope');
    }

    reveal()
    {
        this.revealAns = !this.revealAns;
    }
}
</script>

<style lang="scss">
.label
{
    margin-top: 20px;
    margin-bottom: 5px;
    color: dimgray;
}

.question-text
{
    color: #ff79ad;
}
</style>
