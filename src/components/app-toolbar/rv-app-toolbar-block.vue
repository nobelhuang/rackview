<template>
	<div :class="['rv-app-toolbar__block', 'rv-layout', 'rv-layout--center-items', 'rv-layout__flex-none']"
		:style="{width: width ? (width + 'px') : 'auto'}"
	>
		<slot></slot>
	</div>
</template>

<style lang="scss">
.rv-app-toolbar__block {
	overflow: visible;
	box-sizing: border-box;
	padding: 0 8px;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class RvAppToolbarBlock extends Vue {
	@Prop()
	width: number;
}
</script>
