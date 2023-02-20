<template>
	<main>
		<vue-quagga
			style="width: 100vw; height: 100vh"
			:readers="readers"
		></vue-quagga>
	</main>
</template>

<script setup lang="ts">
import { QuaggaJSCodeReader } from "@ericblade/quagga2";
import { VueQuagga } from "../src/index";

const readers: QuaggaJSCodeReader[] = [
	"code_128_reader",
	"ean_reader",
	"ean_8_reader",
	"code_39_reader",
	"codabar_reader",
	"upc_reader",
	"upc_e_reader",
	"code_93_reader",
];
</script>

<style lang="scss" scoped></style>
