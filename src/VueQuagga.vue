<template>
  <div id="interactive" class="viewport">
    <video
      autoplay="true"
      preload="auto"
      muted="true"
      playsinline="true"
    ></video>
    <canvas class="drawingBuffer"></canvas>
  </div>
</template>

<script setup lang="ts">
import Quagga, {
  type QuaggaJSConfigObject,
  type QuaggaJSResultObject,
} from "@ericblade/quagga2";
import { onMounted, onUnmounted, ref } from "vue";

const width = 492;
const height = 300;
const quaggaConfig = ref<QuaggaJSConfigObject>({
  inputStream: {
    type: "LiveStream",
    constraints: {
      width: { exact: width },
      height: { exact: height },
      facingMode: "environment",
      aspectRatio: width / height,
    },
    willReadFrequently: true,
  },
  locator: {
    halfSample: true,
    patchSize: "medium",
  },
  numOfWorkers: self.navigator.hardwareConcurrency,
  decoder: {
    readers: [
      "code_128_reader",
      "ean_reader",
      "ean_8_reader",
      "code_39_reader",
      "codabar_reader",
      "upc_reader",
      "upc_e_reader",
      // "i2of5_reader",
      // "2of5_reader",
      "code_93_reader",
    ],
    debug: {
      drawBoundingBox: true,
      showFrequency: true,
      drawScanline: true,
      showPattern: true,
    },
    multiple: false,
  },
  locate: true,
  debug: true,
});

onMounted(() => {
  initQuagga();
});

onUnmounted(() => {
  Quagga.offDetected(onDetected);
  // Not sure where `this.offProcessed` comes from
  // if (this.onProcessed) Quagga.offProcessed(this.offProcessed);
  Quagga.stop();
});

const initQuagga = () => {
  Quagga.init(quaggaConfig.value, function (err) {
    if (err) {
      return console.error(err);
    }
    Quagga.start();
  });

  Quagga.onDetected(onDetected);
  Quagga.onProcessed(onProcessed);
};

const onProcessed = (result: QuaggaJSResultObject) => {
  var drawingCtx = Quagga.canvas.ctx.overlay,
    drawingCanvas = Quagga.canvas.dom.overlay;

  if (result) {
    if (result.boxes) {
      drawingCtx.clearRect(
        0,
        0,
        parseInt(drawingCanvas.getAttribute("width") || "0"),
        parseInt(drawingCanvas.getAttribute("height") || "0")
      );
      result.boxes
        .filter(function (box) {
          return box !== result.box;
        })
        .forEach(function (box) {
          Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
            color: "green",
            lineWidth: 2,
          });
        });
    }

    if (result.box) {
      Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
        color: "#00F",
        lineWidth: 2,
      });
    }

    if (result.codeResult && result.codeResult.code) {
      Quagga.ImageDebug.drawPath(result.line, { x: "x", y: "y" }, drawingCtx, {
        color: "red",
        lineWidth: 3,
      });
    }
  }
};

const onDetected = (data: QuaggaJSResultObject) => {
  console.log("detected", data);
};
</script>

<style scoped>
#interactive {
  background: green;
}

.viewport {
  width: 100%;
  height: 100%;
  position: relative;
}

.viewport canvas.drawingBuffer {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
