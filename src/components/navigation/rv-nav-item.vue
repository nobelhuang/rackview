<template>
	<div :class="['rv-nav-item', 'rv-layout', 'rv-layout--center-items']">
		<slot></slot>
		<div :class="['rv-nav-item__subnav']">
			<slot name="subnav"></slot>
		</div>
	</div>
</template>

<style lang="scss">
.rv-nav-item {
	overflow: visible;

	&__subnav {
		/* positioning parent is rv-navigation */
		position: absolute;
		z-index: 10010;
		left: 100%;
		top: 0;
		box-sizing: border-box;
		height: 100%;
	}
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class RvNavItem extends Vue {
}
</script>
