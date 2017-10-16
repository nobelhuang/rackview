<template>
	<div class="rv-app rv-layout" :class="['rv-layout--column']">
		<div class="rv-app__header rv-layout__flex-none">
			<slot name="header"></slot>
		</div>
		<div class="rv-layout__flex rv-layout" :class="['rv-layout--row']">
			<div class="rv-app__nav rv-layout__flex-none">
				<slot name="nav"></slot>
			</div>
			<div class="rv-app__content rv-layout__flex">
				<slot></slot>
			</div>
		</div>
		<div class="rv-app__footer rv-layout__flex-none">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<style lang="scss">
.rv-app {
	width: 100%;
	height: 100%;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class RvApp extends Vue {
}
</script>

