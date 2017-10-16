<template>
	<div :class="['rv-app-toolbar__filling', 'rv-layout__flex']">
	</div>
</template>

<style lang="scss">
.rv-app-toolbar__filling {
	overflow: hidden;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class RvAppToolbarFilling extends Vue {
}
</script>
