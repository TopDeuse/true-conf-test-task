<template>
    <div class="red__light">
        <h1 class="color">STOP!</h1>
        <div class="red" :style=" this.$parent.delay < 3 ? 'animation: blink 400ms alternate infinite;' : '' "></div>
        <div class="yellow"></div>
        <div class="green"></div>
    </div>
</template>

<style scoped>
    .color{
        color:#ff4040;
    }
    .red__light{
        display: flex;
        flex-direction:column;
        align-items: center;
        width: 600px;
        margin: 0 auto;
    }
    .red{
        background: #ff4040;
        height: 100px;
        width: 500px; 
        margin: 10px;  
    }
    .yellow{
        background: #fffb82;
        height: 50px;
        width: 250px; 
        margin: 10px;   
    }
    .green{
        background:#9bff82;
        height: 50px; 
        width: 250px; 
        margin: 10px;    
    } 
</style>