<template>
    <div class="green__light">
        <h1 class="color">GO!</h1>
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green" :style=" this.$parent.delay < 3 ? 'animation: blink 400ms alternate infinite;' : '' "></div>
    </div>
</template>

<style scoped>
    .color{
        color:#4dff40;
        }
    .green__light{
        display: flex;
        flex-direction:column;
        align-items: center;
        margin: 0 auto;
        width: 600px;
    }
    .red{
        background: #ff8282;
        height: 50px;
        width: 250px;
        margin: 10px;  
    }
    .yellow{
        background: #fffb82;
        height: 50px;
        width: 250px;
        margin: 10px;    
    }
    .green{
        background:#4dff40;
        height: 100px;
        width: 500px;
        margin: 10px;      
    }
</style>