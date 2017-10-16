<template>
	<rv-app-toolbar-block :class="['rv-app-toolbar__title']" :width="width">
		<slot></slot>
	</rv-app-toolbar-block>
</template>

<style lang="scss">
.rv-app-toolbar__title {
	overflow: visible;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class RvAppToolbarTitle extends Vue {
	@Prop({ default: 200 })
	width: number;
}
</script>
