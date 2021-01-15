
<template id="countdown-template">

    <div>
        <countdown :time="time" :interval="100" tag="p">
            <template slot-scope="props">
            <div class="countdown-box ">
                <div class="countdown colon m-0 d-flex align-items-center ltr">
                    <div class="countdown-item hours">
                        <div class="countdown-timer">{{ props.hours }}</div>
                    </div>
                    <div class="countdown-item minutes">
                        <div class="countdown-timer">{{ props.minutes}}</div>
                    </div>
                    <div class="countdown-item seconds">
                        <div class="countdown-timer">{{ props.seconds }}</div>
                    </div>
                </div>
            </div>
            </template>
        </countdown>
    </div>

</template>

<script>
    import VueCountdown from '@chenfengyuan/vue-countdown';

    export default {
        name: 'CountDown',
        components: {countdown: VueCountdown},

        data() {
            var now = new Date();
            var newYear = new Date(now.getFullYear() + 1, 0, 1);


            return {
                counting: false,
                time: newYear - now,
            };
        },
        methods: {

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .countdown-box {
        margin-top: 2.2rem;
    }
    .countdown.colon>div:not(:last-child):after {
        content: ":";
        font-size: 1.9rem;
        position: absolute;
        margin: -1rem -.6rem;

        /*right: -.07em;*/
        /*top: 50%;*/
        transform: translate(100%,-50%);
    }
    .hours span:after{
        left:6.4rem;
    }
    .countdown-timer {
        color: #fff;
        font-size: .8rem;
        background-color: #000;
        padding: .3rem .5rem;
        text-align: center;
        min-width: 2.1rem;
        border-radius: .6rem;
    }
    .countdown-item{
        margin-right: .6rem;
    }
    @media(max-width: 430px) {
        .countdown-timer, .off-code-box span , .off-code-box div{
            font-size: .75rem;
        }
        .countdown-timer{
            padding: .3rem 0;
            border-radius: .5rem;
        }
        .off-code-box div{
            margin-left: .3rem;
        }
        .off-code-box img{
            width: 16px;
        }
        .countdown-item {
            margin-right: .3rem;
        }
        .countdown.colon>div[data-v-469af010]:not(:last-child):after {
            font-size: 1.7rem;
            margin: .55rem -.72rem;
        }
        .countdown-box {
            margin-top: 2.4rem;
        }
    }
</style>