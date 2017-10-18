<template>
	<aside :class="['rv-navigation', 'rv-layout', 'rv-layout__flex-none', 'rv-layout--column']" :style="{width: width + 'px'}">
		<slot></slot>
	</aside>
</template>

<style lang="scss">
.rv-navigation {
	height: 100%;
	overflow: visible;
	position: relative;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class RvNavigation extends Vue {
	@Prop({ default: 200 })
	width: number;
}
</script>
