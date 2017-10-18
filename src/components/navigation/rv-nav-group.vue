<template>
	<div :class="['rv-nav-group']">
		<div :class="['rv-nav-group__title']">
			<slot name="title"></slot>
		</div>
		<slot></slot>
	</div>
</template>

<style lang="scss">
.rv-nav-group {
	overflow: visible;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class RvNavGroup extends Vue {
}
</script>
