<template>
    <div class="yellow__light">
        <h1 class="color">READY!</h1>
        <div class="red"></div>
        <div class="yellow" :style=" this.$parent.delay < 3 ? 'animation: blink 400ms alternate infinite;' : '' "></div>
        <div class="green"></div>
    </div>
</template>

<style scoped>
    .color{
        color:#fff540;
        }
    .yellow__light{
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
        background: #fff540;
        height: 100px;
        width: 500px;
        margin: 10px;   
    }
    .green{
        background:#9bff82;
        height: 50px;
        width: 250px;
        margin: 10px;    
    }
</style>