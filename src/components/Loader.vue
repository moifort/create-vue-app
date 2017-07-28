<template>
    <div :class="{ 'animated fadeIn': (status === 'loaded')}">
        <i v-if="status === 'loading'" class="fa fa-circle-o-notch fa-spin fa-fw"></i>
        <i v-if="status === 'error'" class="fa fa-exclamation-triangle fa-fw"></i>
        <slot v-if="status === 'loaded'"></slot>
    </div>
</template>

<script>
    export default {
        props: ['status'],
    }
</script>

