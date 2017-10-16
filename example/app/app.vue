<template>
	<rv-app>
		<rv-app-toolbar slot="header">
			<rv-app-toolbar-title>RackView</rv-app-toolbar-title>
			<rv-app-toolbar-block>link1</rv-app-toolbar-block>
			<rv-app-toolbar-filling></rv-app-toolbar-filling>
			<rv-app-toolbar-block>link2</rv-app-toolbar-block>
			<rv-app-toolbar-block>link3</rv-app-toolbar-block>
		</rv-app-toolbar>
	</rv-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
}
</script>

<style>

</style>

