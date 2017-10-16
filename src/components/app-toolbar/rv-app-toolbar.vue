<template>
	<nav class="rv-app-toolbar rv-layout" :style="{height: height + 'px'}">
		<slot></slot>
	</nav>
</template>

<style lang="scss">
.rv-app-toolbar {
	width: 100%;
	overflow: visible;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class RvAppToolbar extends Vue {
	@Prop({ default: 64 })
	height: number;
}
</script>
