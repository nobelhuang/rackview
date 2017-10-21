<template>
	<rv-app>
		<rv-app-toolbar slot="header">
			<rv-app-toolbar-title>RackView</rv-app-toolbar-title>
			<rv-app-toolbar-block>link1</rv-app-toolbar-block>
			<rv-app-toolbar-filling></rv-app-toolbar-filling>
			<rv-app-toolbar-block>link2</rv-app-toolbar-block>
			<rv-app-toolbar-block>link3</rv-app-toolbar-block>
		</rv-app-toolbar>
		<rv-navigation slot="nav">
			<rv-nav-group>
				<rv-nav-item slot="title">group 1</rv-nav-item>
				<rv-nav-item>item 1</rv-nav-item>
				<rv-nav-item>
					item 2
					<!-- pop out navigation of next level -->
					<rv-navigation slot="subnav">
						<rv-nav-group>
							<rv-nav-item slot="title">sub group 1</rv-nav-item>
							<rv-nav-item>sub item 1</rv-nav-item>
							<rv-nav-item>sub item 2</rv-nav-item>
						</rv-nav-group>
					</rv-navigation>
				</rv-nav-item>
				<!-- nested groups of next level -->
				<rv-nav-group>
					<rv-nav-item slot="title">nested group 1</rv-nav-item>
					<rv-nav-item>nested item 1</rv-nav-item>
					<rv-nav-item>nested item 2</rv-nav-item>
				</rv-nav-group>
				<rv-nav-group>
					<rv-nav-item slot="title">nested group 2</rv-nav-item>
					<rv-nav-item>nested item 3</rv-nav-item>
					<rv-nav-item>nested item 4</rv-nav-item>
				</rv-nav-group>
			</rv-nav-group>
			<rv-nav-group>
				<rv-nav-item slot="title">group 2</rv-nav-item>
				<rv-nav-item>group 2 item 1</rv-nav-item>
			</rv-nav-group>
		</rv-navigation>
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

