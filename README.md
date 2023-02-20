# vue3-quagga2 - A barcode scanner component for Vue3

> Vue3 wrapper for [ericblade/quagga2](https://github.com/ericblade/quagga2)

## 🔥 Motivation

For a small side project, I needed a barcode scanner for a Vue3-based mobile webapp. During my research I came across [serratus/quaggaJS](https://github.com/serratus/quaggaJS) (which seems to be no longer maintained) and [ericblade/quagga2](https://github.com/ericblade/quagga2) (active fork of quaggaJS).

Since the integration of the barcode scanner with **[ericblade/quagga2](https://github.com/ericblade/quagga2)** in my side project was not as easy and fast as I had initially imagined, I came up with the idea to package the functionality in a separate Vue component and publish it. With this project I hope to make it easier for others to integrate [ericblade/quagga2](https://github.com/ericblade/quagga2) into their apps.

And here we are now! 😉

> ⚠️ Since I needed the barcode scanner for a mobile webapp, it is mainly optimized for these purposes at the moment. But I am willing to modify it and extend it with additional features if the community asks for it!

## ⚙️ Usage

Add the dependency to your project:

```shell
npm i vue3-quagga2
# OR
yarn add vue3-quagga2
```

Include it into your application:

```vue
<template>
    <vue-quagga
      :readers="readers"
    ></vue-quagga>
</template>

<script setup>
import { VueQuagga } from "vue3-quagga2";
const readers = [ "code_128_reader" ];
</script>
```

You can find an example usage in the [`/sandbox`](./sandbox/) folder.

## 🤝 Contribution

Everyone is more than welcome to contribute to this project! That's what open source is all about!

To have some contribution guidance, please have a look at [CONTRIBUTING.md](CONTRIBUTING.md).

## 💡 Inspired by

quagga2/quaggaJS related projects:

- [quagga2](https://github.com/ericblade/quagga2) (active fork of quaggaJS)
- [quaggaJS](https://github.com/serratus/quaggaJS) (seems to be no longer maintained)
- [sin-tanaka/vue-quagga](https://github.com/sin-tanaka/vue-quagga)
- <https://codesandbox.io/s/hidden-star-361gx>

General project setup:

- [Create a Vue 3 component with TypeScript and Vite](https://blog.totominc.io/blog/create-a-vue-3-component-with-typescript)

## License

The project is licensed under the ["The Unlicense"](./LICENSE).
