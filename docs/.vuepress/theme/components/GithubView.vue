<script setup lang="ts">
defineProps<{
  src?: string
}>()

function onload() {
  const iframe = document.getElementById('gitIframe');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const partialheader = iframeDoc.getElementById("partial-discussion-header")
  if (!partialheader) {
    onload()
  } else {
    partialheader.style.top = '-300px'
    const headerwrapper = iframeDoc.getElementsByClassName('header-wrapper')
    if (headerwrapper && headerwrapper[0] && headerwrapper[0].style.display !== 'none') {
      headerwrapper[0].style.display = 'none'
    }
    const stickyheader = iframeDoc.getElementById("sticky-header-backdrop")
    if (stickyheader && stickyheader.style.display !== 'none') {
      stickyheader.style.display = 'none'
    }
  }
}
</script>

<template>
  <div class="github-view">
    <iframe :src="src"  sandbox="allow-scripts allow-same-origin" @load="onload" frameborder="0" id="gitIframe"></iframe>
  </div>
</template>

<style>
.github-view {
  iframe {
    width: 100%;
    height: 500px;
  }
}
.partial-discussion-header {
  top: -300px;
}
</style>