<template>
    <div class="header">
        <div class="header-sub">
            <div class="header-text">
                <p class="header-text-content">rock</p>
                <p class="header-text-content">paper</p>
                <p class="header-text-content">scissors</p>
            </div>
            <div class="score">
                <div class="score-text">
                    score
                </div>
                <div class="score-value">
                    {{score}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['score'])
    }
}
</script>

<style lang="scss">
    .header {
        padding-top: 3rem;
        &-sub {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border: 2px solid hsl(217, 16%, 45%);
            border-radius: 1rem;
            padding: 1rem 2rem;
            width: 50rem;
            display: flex;
            justify-content: space-between;
            .header-text-content {
                color: #fff;
                font-weight: 700;
                font-size: 2rem;
                text-transform: uppercase;
            }
        }

        .score {
            background-color: #fff;
            border-radius: .7rem;
            padding: .8rem 3rem .5rem 3rem;
            text-align: center;

            &-value {
                color: hsl(229, 25%, 31%);
                font-size: 4rem;
                font-weight: 700;
            }

            &-text {
                color: hsl(229, 64%, 46%);
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 600;
            }
        }
    }

    
    @media screen and (max-width: 767px) {
        .header {
            &-sub {
                width: 34rem;
            }
        }   
    }
</style>