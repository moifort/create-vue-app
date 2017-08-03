<template>
    <div class="container">
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">You created your vue app</h1>
                <p class="lead text-muted">VueJs, Fontawesome, Bootstrap 4, SCSS, Webpack, Docker...</p>
                <p>
                    <a href="#" class="btn btn-primary">This is...</a>
                    <a href="#" class="btn btn-secondary">...awesome</a>
                </p>
                <p>My request HTTP with Axios, result:
                    <br>
                    <loader :status="status">
                        <code>{{ requestData }}</code>
                    </loader>
                </p>
                <p>
                    <my-component></my-component>
                </p>
                <p>
                    Fitler on numbers {{ '1982093832.09' | number(1, '$ ') }}
                </p>
                <p>
                    <a href="/should-be-not-here">Change the url to see vue router in action</a>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import MyComponent from './components/MyComponent.vue'
    import Loader from './components/Loader.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'dashboard',
        components: {
            MyComponent,
            Loader
        },
        computed: {
            ...mapGetters({
                requestData: 'requestData',
                status: 'requestDataStatus'
            })
        },
        created() {
            this.$store.dispatch('fetchRequestData')
        }
    }
</script>
