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
                <p>My request HTTP with Axios, result: <br><code>{{ request }}</code></p>

                <p>
                    <my-component></my-component>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import MyComponent from './component/MyComponent'
    import api from './api'

    export default {
        name: 'dashboard',
        components: {
            MyComponent
        },
        data: () => ({
            request: {}
        }),
        created() {
            api.myRequest().then(result => this.request = result)
        }
    }
</script>
