<template>
    <div>
        <div class="box"> 
            <h1 :style="{ color: currentColor}">time: {{ delay }}</h1>
            <div class="progress">
                <div class="progress-bar" :style="switchProgressBar"></div>
            </div>
            <hr>
            <transition name="flip" mode="out-in">
                <screen-red v-if="currentColor === colors.red.code"></screen-red>
                <screen-yellow v-else-if="currentColor === colors.yellow.code"></screen-yellow>
                <screen-green v-else-if="currentColor === colors.green.code"></screen-green>
            </transition>
         </div>
    </div>
</template>

<script>
    import Red from './Red.vue';
    import Yellow from './Yellow.vue';
    import Green from './Green.vue';
    import { setInterval } from 'timers';
    
    export default {
            components: {
                'screen-red': Red,
                'screen-yellow': Yellow,
                'screen-green': Green
            },

            data () {
                return {
                    colors: {
                        red: {
                            code: '#ff4040',
                            delay: 10,
                            path: '/1'
                        },
                        yellow: {
                            code: '#fff540',
                            delay: 3,
                            path: '/2'
                        },
                        green: {
                            code: '#4dff40',
                            delay: 15,
                            path: '/3'
                        },
                    },
                    currentColor: '',
                    prevColor: '',
                    delay: 0,
                    max: 0
                }
            },

            methods: {
                switchNext() {
                    if(this.currentColor === this.colors.red.code) {
                        this.prevColor = this.currentColor;
                        this.setColor(this.colors.yellow);
                    }
                    else if(this.currentColor === this.colors.green.code) {
                        this.prevColor = this.currentColor;
                        this.setColor(this.colors.yellow);
                    }
                    else {
                        if(this.prevColor === this.colors.green.code) {
                            this.prevColor = this.currentColor;
                            this.setColor(this.colors.red)
                        }
                        else {
                            this.prevColor = this.currentColor;
                            this.setColor(this.colors.green)
                        }
                    }
                    
                },
                setColor(color) {
                    this.delay = color.delay;
                    this.max = color.delay;
                    this.currentColor = color.code;
                    // eslint-disable-next-line
                    this.$router.push({ path: color.path }).catch(err => {});
                },
                counter(){
                    Math.sign(this.delay) !== 0  ? this.delay-- : this.switchNext();
                }
            },

            computed: {
                switchProgressBar(){
                    return {
                        width: (this.delay / this.max * 100) + '%',
                        background:(this.currentColor)
                    }
                }
            },

            beforeMount() {
                if (this.$router.currentRoute.path === '/1') { this.setColor(this.colors.red); } 
                if (this.$router.currentRoute.path === '/2') { this.setColor(this.colors.yellow); }
                if (this.$router.currentRoute.path === '/3') { this.setColor(this.colors.green); }
                setInterval(this.counter, 1000);
            }
    }
</script>

<style>
    .box{
        margin: 0 auto;
        width: 700px;
    }
    .flip-enter-active{
        animation: flipInX 0.3s linear;
    }
    .flip-leave-active{
        animation: flipOutX 0.3s linear;
    }
    @keyframes flipInX{
        from { transform: rotateX(90deg); }
        to { transform: rotateX(0deg); }
    }
    @keyframes flipOutX{
        from { transform: rotateX(0deg); }
        to { transform: rotateX(90deg); }
    }
    @keyframes blink {
        from { opacity: 1; }
        to { opacity: 0;  }
    }
</style>